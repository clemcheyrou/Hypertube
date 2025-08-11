import { FastifyReply, FastifyRequest } from "fastify";
import { findUserById } from "../models.ts/usersModels";

export async function getMeController(request: FastifyRequest, reply: FastifyReply) {

  const userId = request.session.userId;
  if (!userId) {
    return reply.code(401).send({ success: false, message: 'Unauthorized: userId missing in session' });
  }

  const user = await findUserById(userId);

  if (!user) {
    return reply.code(404).send({ success: false, message: 'User not found' });
  }

  const { password, ...userWithoutPassword } = user;
  return reply.send({ success: true, user: userWithoutPassword });
}