import { UserContext } from '@context/UserProvider';
import { useContext } from 'react';
import useAuth from '@hooks/useAuth'
import './ProfilePage.css'

export default function ProfilePage() {
    const { user, loading } = useContext(UserContext)
    const {logout} = useAuth()

    if (loading) return <div>Loading...</div>

    return (
        <div className='profile'>
            <h1>{user.name || 'null'}</h1>
            <h1>{user.email}</h1>
            <h1>{user.role}</h1>
            <h1>{user.id}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
