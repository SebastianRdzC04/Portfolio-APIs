import express from "express";
import {loginController, registerController} from "../controllers/authController";
import passport from 'passport'
import {passportConfig} from "../../auth";
import roleMiddleware from "../middlewares/roleMiddleware";


passportConfig(passport)


const router = express.Router();

router.post('/login', loginController);

router.post('/register', registerController);

export default router;