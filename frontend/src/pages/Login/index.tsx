import { useForm } from "react-hook-form";
import Button from "../../components/button";
import Input from "../../components/input";
import { iLogin } from "../../interfaces/login.interface";

const Login = ({ navigate }: iLogin) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

      </form>

      <div>
        <Button onClick={() => navigate("/register", { replace: true })}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Login;
