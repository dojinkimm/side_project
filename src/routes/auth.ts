import express, { Request, Response } from 'express';
import { index } from '../controllers/auth';
import passport from 'passport';

const router = express.Router();

router.get('/', (request, response) => {
  response.redirect('http://localhost:3000/');
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
    failureRedirect: 'http://localhost:3000/login'
  }),
  (req: Request, res: Response) => {
    res.redirect('http://localhost:3000/');
  }
);


export default router;
