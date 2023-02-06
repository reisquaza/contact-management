import { iButton } from "../../interfaces/button.interface";

const Button = ({ children, onClick }: iButton) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
