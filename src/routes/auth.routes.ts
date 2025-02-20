import { checkJwt } from '../middlewares/jwt';
import { Router } from 'express';
import AuthController from '../controller/auth.controller';

const router = Router();

// login
router.post('/login', AuthController.login);

//register
router.post('/register',AuthController.new);

// forgot password
router.put('/forgot-password', AuthController.forgotPassword);

// create new password
router.put('/new-password', AuthController.createNewPassword);

// Change password
router.post('/change-password', [checkJwt], AuthController.changePassword);

router.post('/refresh-token',AuthController.refreshToken);


export default router;
