import express, { Request, Response } from 'express';
import passport from 'passport';
import imageUpload from './middleware/imageUpload';
import * as roomController from './controllers/room';

const { CLIENT_URL } = process.env;

const router = express.Router();

router.post('/upload-room', imageUpload, roomController.postCreateRoom);

router.get('/room', roomController.getRoom);


export default router;
