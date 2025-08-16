export const login = async (username: string, password: string): Promise<{ success: boolean; message?: string }> => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message || 'Login failed' };
        }

        return { success: true };
    } catch (error) {
        console.error('Error during login:', error);
        return { success: false, message: 'An error occurred. Please try again.' };
    }
};