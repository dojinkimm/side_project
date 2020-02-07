import express, { Request, Response } from 'express';
import passport from 'passport';
import * as authController from './controllers';

const { CLIENT_URL } = process.env;

const router = express.Router();


router.get(
  '/callback',
  passport.authenticate('google', {
    failureRedirect: `${CLIENT_URL}/login`
  }),(req,res,next)=>{
    res.redirect(`${CLIENT_URL}/`);
  }
);


router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

export default router;
