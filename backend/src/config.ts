import dotenv from 'dotenv';
import pino from 'pino';

dotenv.config();

export const schema = {
    type: 'object',
    required: ['PORT', 'DATABASE_URL'],
    properties: {
        PORT: { type: 'string', default: '3000' },
        DATABASE_URL: { type: 'string' },
        PINO_LOG_LEVEL: { type: 'string', default: 'error' },
        NODE_ENV: { type: 'string', default: 'production' },
    },
};

export const options = { schema, dotenv: true };

export const level = process.env.PINO_LOG_LEVEL as pino.Level;
export const isDev = process.env.NODE_ENV === 'development';