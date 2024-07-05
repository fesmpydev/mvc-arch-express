import { Router } from "express";
import UserController from "../controller/user";

export const userRouter = Router();

userRouter.get("/", UserController.getUsers);
