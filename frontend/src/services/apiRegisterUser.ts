import { iRegisterUser } from "../interfaces/register.interface";
import api from "./api";

const apiRegisterUser = async (data: iRegisterUser) => {
  await api.post("/users", data);
};
export default apiRegisterUser;
