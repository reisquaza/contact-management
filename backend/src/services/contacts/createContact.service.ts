import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { iContactRequest } from "../../interfaces/contacts.interface";

const createContactService = async ({ email }: iContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError(400, "User doesn't exists");
  }

  const newContact = contactRepository.create({
    email,
    name: user.name,
    phoneNumber: user.phoneNumber,
  });

  await contactRepository.save(newContact);

  return newContact;
};

export default createContactService;
