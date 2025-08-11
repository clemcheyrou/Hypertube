import Fastify from 'fastify';
import { createLogger } from 'src/utils/logger';
import env from '@fastify/env';
import fastifyCookie from '@fastify/cookie';
import fastifySession from '@fastify/session';
import { usersRouter } from './modules/routes/usersRoutes';
import { authRouter } from './modules/routes/authRoutes';
import { options, level, isDev } from './config';

const logger = createLogger({ level, isDev });

export { logger };

export const createServer = async () => {
    const fastify = Fastify({ loggerInstance: logger });
    await fastify.register(env, options).after();

    fastify.register(authRouter, { prefix: 'api/auth' })
    fastify.register(usersRouter, { prefix: 'api/users' })

    fastify.register(fastifyCookie);
    fastify.register(fastifySession, {
        cookieName: 'test',
        secret: 'a secret with minimum length of 32 characters',
        cookie: { maxAge: 1800000, secure: false }
    })

    return fastify;
};
