
import { eq } from 'drizzle-orm';
import { db } from '../../db';
import { users } from '../../db/schema';

export async function createUser({ username, password }: { username: string; password: string }) {
  return db
    .insert(users)
    .values({
      username,
      password
    })
    .returning()
    .then(res => res[0]);
}

export async function findUserByUsername(username: string) {
  return db
    .select()
    .from(users)
    .where(eq(users.username, username))
    .limit(1)
    .execute()
    .then(res => res[0]);
}

export async function findUserById(id: string) {
  return db
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1)
    .execute()
    .then(res => res[0]);
}