import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest('http://localhost:8080');

describe('Test mocks', () => {

    it('Debe generar usuarios', async () => {
        const { status, body } = await requester.get('/api/mocks/mockingusers');

        expect(status).to.equal(200);
        expect(body).to.have.property('payload');
        expect(Array.isArray(body.payload)).to.be.true;
    });

    it('Debe generar mascotas', async () => {
        const { status, body } = await requester.get('/api/mocks/mockingpets');

        expect(status).to.equal(200);
        expect(body).to.have.property('payload');
        expect(Array.isArray(body.payload)).to.be.true;
    });

    it('Debe generar datos en DB', async () => {
        const { status } = await requester.post('/api/mocks/generateData').send({
            users: 2,
            pets: 2
        });

        expect(status).to.equal(200);
    });

});