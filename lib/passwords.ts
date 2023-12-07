import bcrypt from 'bcrypt';

export async function hashPassword(plain: string) {
  return await bcrypt.hash(plain, 10);
}

export async function verifyPassword(plain: string, hashed: string) {
  return await bcrypt.compare(plain, hashed);
}