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


export function LogoutButton({ className = '' }) {
    const { logout } = useAuth()

    return (
        <button className={`${styles['button--logout']} ${className}`} onClick={logout}><Icons.Logout />Logout</button>
    )
}

import clsx from 'clsx';




const variants = {
    danger: 'button--danger',
    confirm: 'button--confirm',
    info: 'button--info',
    blue: 'button--blue',
    round: 'button--round',
    purple: 'button--purple',
    normal: 'button--normal'
}


export const Button = ({ variant = 'normal', text = 'Submit', onClick, icon = <></>, isActive = false }) => {

    const className = clsx(styles[variants[variant]], isActive && styles[`${variants[variant]}--active`]);

    return (
        <button className={className} type='button' onClick={onClick}>{icon && <span>{icon}</span>}{text}</button>
    )
}

