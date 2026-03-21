import { Router } from 'express';
import { generateMockUsers, generateMockPets } from '../utils/mocking.js';
import { usersService, petsService } from '../services/index.js';

const router = Router();

// 1. Mover mockingpets aquí
router.get('/mockingpets', (req, res) => {
    const pets = generateMockPets(10);
    res.send({ status: "success", payload: pets });
});

// 2. Endpoint GET /mockingusers
router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.send({ status: "success", payload: users });
});

// 3. Endpoint POST /generateData
router.post('/generateData', async (req, res) => {
    try {
        const { users, pets } = req.body;
        
        // Generamos los arrays de datos
        const mockUsers = generateMockUsers(users);
        const mockPets = generateMockPets(pets);

        // Insertamos en la base de datos usando los servicios existentes
        const createdUsers = await Promise.all(mockUsers.map(user => usersService.create(user)));
        const createdPets = await Promise.all(mockPets.map(pet => petsService.create(pet)));

        res.send({
            status: "success",
            message: `Se insertaron ${users} usuarios y ${pets} mascotas correctamente.`,
            payload: { users: createdUsers.length, pets: createdPets.length }
        });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
});

export default router;