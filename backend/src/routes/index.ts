import Fastify from 'fastify';
// import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
// import * as schema from '../db/schema';

const pool = new Pool({
  connectionString: 'postgresql://postgres:postgres@localhost:5432/hypertube',
});

// const db = drizzle(pool, { schema });

const fastify = Fastify({
  logger: true,
});

// Route exemple
fastify.get('/', async () => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
  }
};

start();
