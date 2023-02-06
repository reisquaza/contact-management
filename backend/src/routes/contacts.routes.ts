import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const contactRouter = Router();

contactRouter.post("/", tokenAuthMiddleware, createContactController);

export default contactRouter;
