import "reflect-metadata";
import "express-async-errors";
import * as express from "express";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.use(handleAppErrorMiddleware);

export default app;
