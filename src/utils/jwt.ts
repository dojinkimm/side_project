import jwt from 'jsonwebtoken';

const { JWT_SECURE } = process.env;

export function generateJWT(id: number, googleId: string): Promise<jwt.Secret> {
  const payload = { id, googleId };
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      JWT_SECURE || '',
      { expiresIn: 1000 * 24 * 60 * 60 },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

export function verifyJWT(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECURE || '', (err: jwt.VerifyErrors, decoded: any) => {
      if(err) reject(err);
      resolve(decoded);
    });
  });
}
