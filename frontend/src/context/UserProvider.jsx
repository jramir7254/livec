import { createContext, useState, useEffect } from 'react';

/** 
 * This context serves to identify wether a user is signed in or not
 * which restricts certain features. If a user is signed in, the users
 * data can be accessed with the @user object.
 * 
*/

export const UserContext = createContext();

export default function UserProvider ({ children }) {
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
