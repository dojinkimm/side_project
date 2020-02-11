import express, { Request, Response } from 'express';

import checkToken from '../../middleware/checkToken';
import imageUpload from './middleware/imageUpload';
import * as roomController from './controllers';

const { CLIENT_URL } = process.env;

const router = express.Router();

router.post('/upload-room', checkToken, imageUpload, roomController.postCreateRoom);

router.get('/room', roomController.getRoom);


export default router;
