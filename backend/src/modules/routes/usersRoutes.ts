import { FastifyInstance } from 'fastify';
import { getMeController } from '../controllers/usersControllers';
import { requireAuth } from '../../middleware/requireAuth';

export const usersRouter = (fastify: FastifyInstance) => {
  fastify.get('/me', { preHandler: requireAuth }, getMeController);
}