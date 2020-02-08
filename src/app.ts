import express, { Request, Response, NextFunction } from 'express';
import './env';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './api/routes';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import checkAuth from './api/middleware/checkToken';
import passportSetting from './utils/passport';

const {CLIENT_URL} = process.env;

class App {
  public app: express.Application = express();

  constructor() {
    this.middlewares();
    this.passportAuth();
    this.routeMiddlewares();
  }

  private middlewares(): void {
    this.app.set('port', process.env.APP_PORT || 8080);
    this.app.use(cors({
      origin: CLIENT_URL,
      credentials: true
    }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    // this.app.use(checkAuth);
  }

  private passportAuth = (): void => {
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private routeMiddlewares = (): void => {
    this.app.use(router);
    passportSetting();
  }
}

export default new App().app;
