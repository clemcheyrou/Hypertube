import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '../db';
import { users } from '../db/schema';
import { createServer } from '../server';

describe('Auth Routes', () => {
  let app: any;

  beforeAll(async () => {
    app = await createServer();
    await app.ready();
    await db.delete(users);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /register', () => {
    it('should register a new user successfully', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/auth/register',
        payload: {
          username: 'testuser',
          password: 'password123'
        }
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.success).toBe(true);
      expect(body.user.username).toBe('testuser');
      expect(body.user.password).toBeUndefined();
    });

    it('should not allow duplicate usernames', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/auth/register',
        payload: {
          username: 'testuser',
          password: 'password123'
        }
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.success).toBe(false);
      expect(body.message).toBe('Username already taken');
    });
  });

  describe('POST /login', () => {
    it('should login successfully with correct credentials', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/auth/login',
        payload: {
          username: 'testuser',
          password: 'password123'
        }
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.success).toBe(true);
      expect(body.user.username).toBe('testuser');
    });

    it('should fail with incorrect password', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/auth/login',
        payload: {
          username: 'testuser',
          password: 'wrongpassword'
        }
      });

      expect(response.statusCode).toBe(401);
      const body = JSON.parse(response.body);
      expect(body.success).toBe(false);
    });
  });

  describe('POST /logout', () => {
    it('should logout successfully', async () => {
      const loginResponse = await app.inject({
        method: 'POST',
        url: '/api/auth/login',
        payload: {
          username: 'testuser',
          password: 'password123'
        }
      });

      const cookies = loginResponse.cookies[0];

      const response = await app.inject({
        method: 'GET',
        url: '/api/auth/logout',
        cookies: {
          [cookies.name]: cookies.value
        }
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.success).toBe(true);
    });
  });
});
