import { Button } from '../../design-systems/button/Button';
import { HStack } from '../../design-systems/hstack/HStack';
import { Navbar } from '../../design-systems/navbar/Navbar';
import { VStack } from '../../design-systems/vstack/VStack';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Movies', href: '/movies' },
    { label: 'Profile', href: '/profile' },
    { label: 'Logout', href: '/logout' },
];

export const LandingPage = () => {
    return (
        <VStack className="max-h-screen items-center justify-center p-12">
            <HStack className="justify-between w-full mb-40">
                <Navbar links={navLinks} className="w-full" />
            </HStack>
            <VStack className="w-full">
                <VStack className="items-start">
                    <p className="text-left opacity-40 font-light">Movie and series</p>
                    <h1 className="text-3xl">Watch anytime, anywhere</h1>
                </VStack>
                <VStack className="w-full items-center">
                    <img src="src/assets/screen.png" alt="Description" className="mb-4 w-full" />
                    <VStack className="w-full">
                        <Button className="w-full" href="/login">
                            Sign-in
                        </Button>
                        <Button className="w-full" variant="secondary" href="/register">
                            Register
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </VStack>
    );
};
