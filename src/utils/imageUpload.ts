import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname);
  }
});

const fileFilter = (req: Request, file: any, cb: any) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true); // if we want to store file
  } else {
    cb(null, false); // if we don't want to store file
  }
};

const upload = multer({
    storage: fileStorage, fileFilter: fileFilter
  }).array('image', 6);

export default upload;