import jwt from 'jsonwebtoken';

const { JWT_SECURE } = process.env;

export function generateJWT(
  exist: boolean,
  id: number,
  googleId: string
): Promise<jwt.Secret> {
  const payload = {exist, id, googleId};
  return new Promise(() => {
    jwt.sign(payload, JWT_SECURE, { expiresIn: 1000 * 24 * 60 * 60 });
  });
}

export function verifyJWT(token: string): Promise<jwt.Secret> {
  return new Promise(() => {
    jwt.verify(token, JWT_SECURE);
  });
}
