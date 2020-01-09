import express from "express";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { MONGODB_URI } from "./utils/env";
import authRouter from './routes/auth';

class App{
  public app: express.Application = express();

  constructor(){
    this.middlewares(); 
    this.routeMiddlewares(); 
    this.mongoSetup();
  }

  private middlewares = () : void => {
    this.app.set("port", process.env.APP_PORT || 3000);
    this.app.use(bodyParser.json());
    
  };

  private routeMiddlewares = () : void => {
    this.app.use(authRouter);
  };

  private mongoSetup(): void{
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
      .catch(err => {
        console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    });        
  }
}


export default new App().app;

// const port = 3000;
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("The sedulous hyena ate the antelope!");
// });

// app.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${port}`);
// });
// const path = require("path");

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const multer = require("multer");

// const feedRoutes = require("./routes/feed");
// const authRoutes = require("./routes/auth");

// const app = express();

// const MONGODB_URI =
//   "mongodb+srv://henrykim:Turkmenistan2^@cluster0-w4iq5.mongodb.net/messages?retryWrites=true&w=majority";

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// // app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
// app.use(bodyParser.json()); // application/json
// app.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
// );
// app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, PATCH, DELETE'
//   );
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// app.use('/feed', feedRoutes);
// app.use('/auth', authRoutes);

// app.use((error, req, res, next) => {
//   console.log(error);
//   const status = error.statusCode || 500;
//   const message = error.message;
//   const data = error.data;
//   res.status(status).json({ message: message, data: data });
// });

// mongoose
//   .connect(MONGODB_URI, { useNewUrlParser: true })
//   .then(result => {
//     const server = app.listen(8080);
//     const io = require('./socket').init(server);
//     io.on('connection', socket => {
//       console.log('Client connected');
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });
