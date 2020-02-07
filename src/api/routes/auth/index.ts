import express, { Request, Response } from 'express';
import passport from 'passport';
import * as authController from './controllers';

const { CLIENT_URL } = process.env;

const router = express.Router();

router.get('/', (request, response) => {
  response.redirect(`${CLIENT_URL}/`);
});

router.get(
  '/login',
  passport.authenticate('google', {
    scope: ['profile']
  })
);
router.get(
  '/login/callback',
  passport.authenticate('google', {
    failureRedirect: `${CLIENT_URL}/login`
  }),
  (req: Request, res: Response) => {
    res.redirect(`${CLIENT_URL}/`);
  }
);


export default router;
