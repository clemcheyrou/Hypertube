export const logout = async (): Promise<{ success: boolean; message?: string }> => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message || 'Logout failed' };
        }

        return { success: true };
    } catch (error) {
        console.error('Error during logout:', error);
        return { success: false, message: 'An error occurred. Please try again.' };
    }
};