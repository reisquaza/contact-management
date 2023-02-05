import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import readUsersController from "../controllers/user/readUsers.controller";

const userRouter = Router();

userRouter.post("/", createUserController);

userRouter.get("/", readUsersController);

export default userRouter;
