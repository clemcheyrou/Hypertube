import { Button } from '../../../design-systems/button/Button';
import { HStack } from '../../../design-systems/hstack/HStack';
import { VStack } from '../../../design-systems/vstack/VStack';
import { SlSocialGoogle, SlSocialGithub } from 'react-icons/sl';
import { Si42 } from "react-icons/si";


const providers = [
    { name: 'Google', icon: <SlSocialGoogle className="inline-block" />, onClick: () => console.log('Google') },
    { name: 'GitHub', icon: <SlSocialGithub className="inline-block" />, onClick: () => console.log('GitHub') },
    { name: '42', icon: <Si42 className="inline-block" />, onClick: () => console.log('42') },
];

export const OAuthLogin = () => {
    return (
        <VStack className="flex items-center justify-center space-y-4 py-14">
            <p>Or continue with</p>
            <HStack className="w-full justify-center items-center space-x-8">
                {providers.map((provider) => (
                    <Button
                        key={provider.name}
                        className="text-white"
                        size="sm"
                        onClick={provider.onClick}
                    >
                        {provider.icon}
                    </Button>
                ))}
            </HStack>
        </VStack>
    );
};
