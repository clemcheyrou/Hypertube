import { useForm, type SubmitHandler } from 'react-hook-form';
import { Input } from '../../../design-systems/input/Input';
import { Button } from '../../../design-systems/button/Button';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

type FormValues = {
    username: string;
    password: string;
};

export const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const result = await login(data.username, data.password);

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
                    {...register('username', { required: 'Username is required' })}
                    placeholder="Username"
                />
                {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                )}
            </div>

            <div>
                <Input
                    {...register('password', { required: 'Password is required' })}
                    placeholder="Password"
                    type="password"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
            </div>
            <p className="text-right pb-6 hover:underline cursor-pointer">Forgot your password?</p>

            <Button type="submit" className="w-full">
                Sign in
            </Button>
        </form>
    );
};
