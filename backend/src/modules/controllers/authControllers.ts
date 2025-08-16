import { FastifyReply, FastifyRequest } from "fastify";
import { createUser, findUserByUsername } from "../models.ts/usersModels";
import bcrypt from 'bcrypt';

export async function loginController(request: FastifyRequest, reply: FastifyReply) {
  const { username, password } = request.body as { username: string; password: string };

  console.log(username, password)
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

export async function registerController(request: FastifyRequest, reply: FastifyReply) {
  const { username, password } = request.body as { username: string; password: string };

  try {
    // Check if user already exists
    const existingUser = await findUserByUsername(username);
    if (existingUser) {
      return reply.code(400).send({
        success: false,
        message: 'Username already taken'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await createUser({
      username,
      password: hashedPassword
    });

    // Auto login after registration
    request.session.authenticated = true;
    request.session.userId = newUser.id;

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    return reply.code(201).send({
      success: true,
      message: 'Registration successful',
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