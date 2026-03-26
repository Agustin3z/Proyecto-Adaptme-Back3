import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

/**
 * @swagger
 * components:
 * schemas:
 * User:
 * type: object
 * properties:
 * first_name:
 * type: string
 * description: Nombre del usuario
 * last_name:
 * type: string
 * description: Apellido del usuario
 * email:
 * type: string
 * description: Email único del usuario
 * role:
 * type: string
 * description: Rol del usuario (user/admin)
 * example:
 * first_name: Agustin
 * last_name: Alaniz
 * email: agustin3z@live.com
 * role: user
 */

/**
 * @swagger
 * /api/users:
 * get:
 * summary: Obtiene la lista de todos los usuarios
 * tags: [Users]
 * responses:
 * 200:
 * description: Lista de usuarios obtenida exitosamente
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/User'
 */
// Repite un bloque similar para el método GET /:uid, PUT y DELETE

const router = Router();

router.get('/',usersController.getAllUsers);

router.get('/:uid',usersController.getUser);
router.put('/:uid',usersController.updateUser);
router.delete('/:uid',usersController.deleteUser);


export default router;