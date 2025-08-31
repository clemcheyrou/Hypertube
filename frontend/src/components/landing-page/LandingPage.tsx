import { Button } from '../../design-systems/button/Button';
import { HStack } from '../../design-systems/hstack/HStack';
import { Navbar } from '../../design-systems/navbar/Navbar';
import { VStack } from '../../design-systems/vstack/VStack';

const navLinks = [
    { label: 'Home', href: '/', onClick: () => {} },
    { label: 'Movies', href: '/movies', onClick: () => {} },
    { label: 'Profile', href: '/profile', onClick: () => {} },
    { label: 'Logout', href: '/logout', onClick: () => {} },
];

export const LandingPage = () => {
    return (
        <VStack className="h-[80vh] items-center justify-center p-12 md:p-40">
            <HStack className="justify-between w-full mb-40">
                <Navbar links={navLinks} className="w-full" />
            </HStack>
            <VStack className="w-full">
                <VStack className="items-start">
                    <p className="text-left opacity-40 font-light">Movie and series</p>
                    <h1 className="text-3xl">Watch anytime, anywhere</h1>
                </VStack>
                <VStack className="w-full items-center">
                    <img src="src/assets/screen.png" alt="Description" className="mb-4 w-full h-[400px]" />
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
