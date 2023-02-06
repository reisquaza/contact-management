import { iInput } from "../../interfaces/input.interfaces";

const Input = ({ type, id, title, register }: iInput) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} {...register(id)} />
    </div>
  );
};

export default Input;
