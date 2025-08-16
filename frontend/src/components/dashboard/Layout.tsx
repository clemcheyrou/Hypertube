import { useNavigate } from "react-router-dom";
import { HStack } from "../../design-systems/hstack/HStack";
import { Navbar } from "../../design-systems/navbar/Navbar";
import { VStack } from "../../design-systems/vstack/VStack";
import { logout } from "./api";

export const Layout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const result = await logout();
        if (result.success) {
            navigate('/');
        } else {
            alert(result.message || 'Logout failed');
        }
    };

    const navLinks = [
        { label: 'Logout', href: '#', onClick: handleLogout },
    ];

    return (
        <VStack className="max-h-screen items-center justify-center p-12">
            <HStack className="justify-between w-full mb-40">
                <Navbar links={navLinks} className="w-full" />
            </HStack>
        </VStack>
    );
};