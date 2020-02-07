import express, { Request, Response } from 'express';
import passport from 'passport';
import * as authController from './controllers';

const { CLIENT_URL } = process.env;

const router = express.Router();

router.get(
  '/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: `${CLIENT_URL}/login`
  }),
  authController.authLogin
);

router.get(
  '/',
  passport.authenticate('google', {
    session: false,
    scope: ['profile']
  })
);

export default router;
