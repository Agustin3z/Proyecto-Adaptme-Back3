import { faker } from '@faker-js/faker';
import { createHash } from './index.js'; 

export const generateMockUsers = (count) => {
    const users = [];
    const roles = ['user', 'admin'];

    for (let i = 0; i < count; i++) {
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: createHash('coder123'),
            role: roles[Math.floor(Math.random() * roles.length)],
            pets: []
        });
    }
    return users;
};

export const generateMockPets = (count) => {
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            name: faker.animal.dog(),
            specie: faker.animal.type(),
            adopted: false,
            owner: null
        });
    }
    return pets;
};