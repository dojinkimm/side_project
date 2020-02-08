import { Request, Response, NextFunction } from 'express';
import { generateJWT } from '../../../../utils/jwt';

const { CLIENT_URL } = process.env;

export const authLogin = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    res.cookie('UID', req.user.token, {
      maxAge: 1000 * 24 * 60 * 60
    });

    return res.redirect(`${CLIENT_URL}/`);
  } catch (e) {
    next(e);
  }
};
