import useAuth  from '@hooks/useAuth'


export default function LogoutButton() {
    const { logout } = useAuth()
    
    return (
        <button style={{color: 'black'}}onClick={logout}>Logout</button>
    )
}
