import { expect } from 'chai';
import supertest from 'supertest';
import app from '../src/app.js';

const requester = supertest(app);

describe('Test de Users', function () {

    this.timeout(10000);

    let createdUserId;

    it('GET /api/users - debería devolver lista de usuarios', async () => {
        const { status, body } = await requester.get('/api/users');

        expect(status).to.equal(200);
        expect(body).to.have.property('payload');
        expect(body.payload).to.be.an('array');

        if (body.payload.length > 0) {
            expect(body.payload[0]).to.have.property('_id');
        }
    });

    it('POST /api/users - debería crear un usuario correctamente', async () => {
        const newUser = {
            first_name: "Test",
            last_name: "User",
            email: `test${Date.now()}@mail.com`,
            password: "123456"
        };

        const { status, body } = await requester.post('/api/users').send(newUser);

        expect(status).to.equal(201);

        // Adaptado a tu estructura (puede ser payload o directo)
        if (body.payload) {
            expect(body.payload).to.have.property('_id');
            createdUserId = body.payload._id;
        } else {
            expect(body).to.have.property('_id');
            createdUserId = body._id;
        }
    });

    it('GET /api/users/:id - debería obtener un usuario por ID', async () => {
        const { status, body } = await requester.get(`/api/users/${createdUserId}`);

        expect(status).to.equal(200);

        if (body.payload) {
            expect(body.payload).to.have.property('_id');
        } else {
            expect(body).to.have.property('_id');
        }
    });

    it('POST /api/users - debería fallar si falta email', async () => {
        const invalidUser = {
            first_name: "Test"
        };

        const { status } = await requester.post('/api/users').send(invalidUser);

        expect(status).to.equal(400);
    });

});