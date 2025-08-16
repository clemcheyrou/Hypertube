import { FastifyInstance } from 'fastify';
import { loginController, logoutController, registerController } from '../controllers/authControllers';

export const authRouter = (fastify: FastifyInstance) => {
  fastify.post('/login', loginController);
  fastify.get('/logout', logoutController);
  fastify.post('/register', registerController);
}