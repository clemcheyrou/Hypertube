import { FastifyInstance } from 'fastify';
import { loginController, logoutController } from '../controllers/authControllers';

export const authRouter = (fastify: FastifyInstance) => {
  fastify.post('/login', loginController);
  fastify.get('/logout', logoutController);
}