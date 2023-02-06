import Button from "../../components/button";
import Input from "../../components/input";
import {
  iRegisterPage,
  iRegisterUser,
} from "../../interfaces/register.interface";
import { useForm } from "react-hook-form";
import apiRegisterUser from "../../services/apiRegisterUser";

const Register = ({ navigate }: iRegisterPage) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>();

  const onSubmit = (data: iRegisterUser) => {
    // apiRegisterUser(data).then((res) => console.log(res));
    console.log(data)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input id="name" title="name" type="text" register={register} />
        <Input id="email" title="email" type="email" register={register} />
        <Input
          id="password"
          title="Password"
          type="password"
          register={register}
        />
        <Input
          id="phoneNumber"
          title="Phone Number"
          type="text"
          register={register}
        />
        <Button>Send</Button>
      </form>
      <Button onClick={() => navigate("login", { replace: true })}>
        Login
      </Button>
    </div>
  );
};
export default Register;
