import express from "express";
import {viewAllUsersController, viewUserController, updateUserController} from "../controllers/usersController";
import roleMiddleware from "../middlewares/roleMiddleware";

const router = express.Router();

router.get('/',roleMiddleware('1'), viewAllUsersController);
router.get('/me', viewUserController);
router.put('/me', updateUserController);

export default router;