import { Request, Response } from "express";
import { iContactRequest } from "../../interfaces/contacts.interface";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const email: iContactRequest = req.body;

  const newContact = await createContactService(email);

  return res.status(201).json({ newContact });
};

export default createContactController;
