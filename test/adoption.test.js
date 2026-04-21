import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest('http://localhost:8080');

describe('Pruebas funcionales del router de Adopciones', () => {
    let userId;
    let petId;

    before(async () => {
        await requester.post('/api/mocks/generateData').send({
            users: 1,
            pets: 1
        });

        const usersRes = await requester.get('/api/users');
        const petsRes = await requester.get('/api/pets');

        const users = usersRes.body.payload || usersRes.body;
        const pets = petsRes.body.payload || petsRes.body;

        userId = users[0]?._id;
        petId = pets[0]?._id;

        if (!userId || !petId) {
            throw new Error('No se pudieron obtener IDs para test');
        }
    });

    it('GET /api/adoptions → debe devolver lista', async () => {
        const { status, body } = await requester.get('/api/adoptions');

        expect(status).to.equal(200);
        expect(body).to.have.property('payload');
        expect(body.payload).to.be.an('array');
    });

    it('POST /api/adoptions/:uid/:pid → debe crear adopción', async () => {
        const { status } = await requester.post(`/api/adoptions/${userId}/${petId}`);
        expect(status).to.equal(200);
    });

    it('POST /api/adoptions/:uid/:pid → no debe permitir duplicados', async () => {
        const { status } = await requester.post(`/api/adoptions/${userId}/${petId}`);
        expect(status).to.equal(400);
    });

    it('GET /api/adoptions/:aid → 404 si no existe', async () => {
        const fakeId = '646f1f1f1f1f1f1f1f1f1f1f';
        const { status } = await requester.get(`/api/adoptions/${fakeId}`);
        expect(status).to.equal(404);
    });
});