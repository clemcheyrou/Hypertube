import { FastifyRequest, FastifyReply } from 'fastify';

export function requireAuth(
  request: FastifyRequest,
  reply: FastifyReply,
  done: (err?: Error) => void
) {
  if (!request.session?.authenticated) {
    reply.code(401).send({ success: false, message: 'Unauthorized' });
    return;
  }
  done();
}