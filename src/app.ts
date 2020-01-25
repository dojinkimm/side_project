import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
// import { MONGODB_URI } from './utils/env';
import authRouter from './routes/auth';
import passport from 'passport';

import passportSetting from './utils/passport';

class App {
  public app: express.Application = express();

  constructor() {
    this.middlewares();
    this.passportAuth();
    this.routeMiddlewares();
    this.mongoSetup();
  }

  private middlewares(): void {
    this.app.set('port', process.env.APP_PORT || 8080);
    this.app.use(bodyParser.json());
  }

  private passportAuth = (): void => {
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private routeMiddlewares = (): void => {
    this.app.use(authRouter);
    passportSetting();
  }

  private mongoSetup = (): void => {
    // mongoose.Promise = global.Promise;
    // mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).catch(err => {
    //   console.log(
    //     'MongoDB connection error. Please make sure MongoDB is running. ' + err
    //   );
    // });
  }
}

export default new App().app;
