import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import readAllContactsController from "../controllers/contacts/readAllContacts.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const contactRouter = Router();

contactRouter.post("/", tokenAuthMiddleware, createContactController);

contactRouter.get("/users/:id", tokenAuthMiddleware, readAllContactsController);

export default contactRouter;
