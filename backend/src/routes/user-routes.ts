import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "../controllers/user-controller.js";
import {loginValidator, signupValidator, validate} from "../utils/validator.js"


const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', validate(signupValidator) ,userSignup);
userRouter.post('/login', validate(loginValidator) ,userLogin);

export default userRouter;

