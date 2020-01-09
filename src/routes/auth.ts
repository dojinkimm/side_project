import * as express from "express";
import * as authController from '../controllers/auth';

const router = express.Router();

router.get('/', (request, response) => {
    response.send('Hello world!');
});
  
export default router;