import { Link } from 'react-router-dom';
import { VStack } from '../../design-systems/vstack/VStack';
import { RegisterForm } from './register/RegisterForm';
import { OAuthLogin } from './sign-in/OAuthLogin';

export const Register = () => {
    return (
        <VStack className="items-center justify-center mt-22">
            <h1 className="text-3xl mb-16">Register</h1>
            <VStack className="w-full max-w-sm space-y-4">
                <RegisterForm />
                <OAuthLogin />
                <p className='text-center text-gray-500'>
                    Already have an account?{' '}
                    <Link to="/login">
                        <span className='underline cursor-pointer hover:text-white'>
                            Sign-in
                        </span>
                    </Link>
                </p>
            </VStack>
        </VStack>
    );
};