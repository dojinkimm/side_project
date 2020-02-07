import { Request, Response, NextFunction } from 'express';
import {generateJWT} from '../../../../utils/jwt';

const { CLIENT_URL } = process.env;

export const authLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const token = generateJWT(req.id);
    res.status(200).json({token, isAuth: req.isAuth});
    return res.redirect(`${CLIENT_URL}/`);
}
