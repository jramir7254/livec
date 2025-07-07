import { useNavigate } from 'react-router';
import styles from './Buttons.module.scss'
import * as Icons from '@components/Icons'
import useAuth from '@hooks/useAuth'



export function BackButton({ to }) {
    const navigate = useNavigate()
    return (
        <button className={styles['button--back']} onClick={() => navigate(to)}>
            <span>←</span> Back to suggestions
        </button>
    )
}


export function LogoutButton({className = ''}) {
    const { logout } = useAuth()

    return (
        <button className={`${styles['button--logout']} ${className}`} onClick={logout}><Icons.Logout/>Logout</button>
    )
}





const variants = {
    danger: 'button--danger',
    blue: 'button--blue',
    purple: 'button--purple'
}


export const Button = ({variant, text, action, icon}) => {
    const type = variants[variant]

    return (
        <button className={styles[type]} onClick={action}>{icon && <span>{icon}</span>}{text}</button>
    )
}
