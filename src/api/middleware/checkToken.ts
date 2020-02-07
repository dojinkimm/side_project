import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../../utils/jwt';

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(' ')[1];

  let decodedToken;
  try {
    decodedToken = verifyJWT(token);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }

  req.token = token;
  req.isAuth = true;
  next();

};
