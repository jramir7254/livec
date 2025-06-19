import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const handleUser = (u) => {
        sessionStorage.setItem('user', JSON.stringify(u))
        setUser(u)
    }

    useEffect(() => {
        try {
            const sessionUser = sessionStorage.getItem('user');
            if (sessionUser) {
                setUser(JSON.parse(sessionUser))
            }
        } catch (error) {
            console.error("Error in user context:", error.message);
        } finally {
            setLoading(false)
        }
    }, [])
    

    return (
        <UserContext.Provider value={{ user, handleUser, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;