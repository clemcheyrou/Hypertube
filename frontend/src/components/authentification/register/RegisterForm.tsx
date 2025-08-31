import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../../../design-systems/input/Input";
import { Button } from "../../../design-systems/button/Button";
import { useNavigate } from "react-router-dom";
import { register as registerApi } from "../api";

type RegisterValues = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterValues>();
    const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterValues> = async (data) => {
        const result = await registerApi(
          data.username,
          data.firstName,
          data.lastName,
          data.email,
          data.password
        );

    if (result.success) {
        navigate('/dashboard');
    } else {
        alert(result.message || 'Login failed');
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <div>
        <Input
          {...register("username", { required: "Username is required" })}
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>
      <div>
        <Input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <Input
          {...register("lastName", { required: "Last name is required" })}
          placeholder="Last Name"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>
      <div>
        <Input
          {...register("email", { 
            required: "Email is required", 
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
          })}
          placeholder="Email"
          type="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Input
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};