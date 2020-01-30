import express, { Request, Response } from 'express';
import passport from 'passport';
import * as roomController from '../controllers/room';

const { CLIENT_URL } = process.env;

const router = express.Router();

router.post('/upload-room', roomController.postCreateRoom);

router.get('/room', roomController.getRoom);


export default router;
