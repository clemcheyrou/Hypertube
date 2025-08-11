import { FastifyReply, FastifyRequest } from "fastify";
import { findUserByUsername } from "../models.ts/usersModels";
import bcrypt from 'bcrypt';

export async function loginController(request: FastifyRequest, reply: FastifyReply) {
  const { username, password } = request.body as { username: string; password: string };

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return reply.code(401).send({
        success: false,
        message: 'User not found'
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return reply.code(401).send({
        success: false,
        message: 'Invalid password'
      });
    }

    request.session.authenticated = true;
    request.session.userId = user.id;

    const { password: _, ...userWithoutPassword } = user;
    return reply.code(200).send({
      success: true,
      message: `${user.username} is connected`,
      user: userWithoutPassword
    });
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({
      success: false,
      message: 'Internal server error'
    });
  }
}

export async function logoutController(request: FastifyRequest, reply: FastifyReply) {
  if (request.session.authenticated) {
    request.session.destroy((err) => {
      if (err) {
        reply.status(500).send('Internal Server Error');
      } else {
        reply.send({ success: true, message: 'Disconnected' });
      }
    });
  } else {
    reply.send({ success: true, message: 'Already disconnected' });
  }
}
