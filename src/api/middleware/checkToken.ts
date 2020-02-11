import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../../utils/jwt';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.UID;
  try {
    if (!token) throw new Error('No Token');

    const { id } = await verifyJWT(token);
    req.user = { id: +id };
    next();
  } catch (e) {
    console.log(e);
  }
};
