import { FastifyInstance } from 'fastify';
import { loginController, logoutController, registerController } from '../controllers/authControllers';

export const authRouter = (fastify: FastifyInstance) => {
  fastify.post('/login', loginController);
  fastify.post('/logout', logoutController);
  fastify.post('/register', registerController);
}