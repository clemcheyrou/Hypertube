import bcrypt from 'bcrypt';
import { db } from '.';
import { users } from './schema';

const seed = async () => {
  const hashedPassword = await bcrypt.hash('password', 10);

  await db.insert(users).values({
    id: crypto.randomUUID(),
    username: 'testuser',
    password: hashedPassword,
  });

  console.log('Utilisateur créé avec succès');
};

seed()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });