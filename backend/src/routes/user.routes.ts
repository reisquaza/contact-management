import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import readUserByIdController from "../controllers/user/readUserById.controller";
import readUsersController from "../controllers/user/readUsers.controller";

const userRouter = Router();

userRouter.post("/", createUserController);

userRouter.get("/", readUsersController);

userRouter.get("/:id", readUserByIdController);

export default userRouter;
