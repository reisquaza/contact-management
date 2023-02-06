import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";

export interface iInput {
  title: string;
  id: string;
  type: "text" | "email" | "password";
  register: UseFormRegister<FieldValues>;
}
