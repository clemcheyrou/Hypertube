import { Link } from 'react-router-dom';
import { VStack } from '../../design-systems/vstack/VStack';
import { OAuthLogin } from './sign-in/OAuthLogin';
import { SignInForm } from './sign-in/SignInForm';

export const Login = () => {
    return (
        <VStack className="items-center justify-center mt-32">
            <h1 className="text-3xl mb-16">Sign In</h1>
            <VStack className="w-full max-w-sm space-y-4">
                <SignInForm />
                <OAuthLogin />
                <p className='text-center text-gray-500'>Don't have an account? <Link to="/register"><span className='underline cursor-pointer hover:text-white'>Sign-in</span></Link></p>
            </VStack>
        </VStack>
    );
};
