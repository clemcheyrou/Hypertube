import { VStack } from '../../design-systems/vstack/VStack';
import { OAuthLogin } from './sign-in/OAuthLogin';
import { SignInForm } from './sign-in/SignInForm';

export const Login = () => {
    return (
        <VStack className="max-h-screen items-center justify-center mt-72">
            <h1 className="text-3xl mb-16">Sign In</h1>
            <VStack className="w-full max-w-sm space-y-4">
                <SignInForm />
                <OAuthLogin />
                <p className='text-center text-gray-500'>Already have an account? <span className='underline cursor-pointer hover:text-white'>Sign-in</span></p>
            </VStack>
        </VStack>
    );
};
