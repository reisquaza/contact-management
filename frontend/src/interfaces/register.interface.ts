import { NavigateFunction } from "react-router-dom";

export interface iRegisterPage {
  navigate: NavigateFunction;
}

export interface iRegisterUser {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
}
