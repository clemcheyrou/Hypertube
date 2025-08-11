import 'fastify'
import '@fastify/session'

declare module 'fastify-session' {
  interface Session {
    authenticated?: boolean
    userId?: string
  }
}

declare module 'fastify' {
  interface FastifyInstance {
      config: {
          PORT: string;
          DATABASE_URL: string;
          PINO_LOG_LEVEL: string;
          NODE_ENV: string;
      };
    }
  interface Session {
    authenticated?: boolean
    userId?: string
  }
}