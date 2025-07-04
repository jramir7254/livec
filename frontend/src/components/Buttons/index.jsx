import React from 'react'
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from 'react-router';
import styles from './Buttons.module.scss'
import * as Icons from '@components/Icons'


export function BackButton({ to }) {
    const navigate = useNavigate()
    return (
        <button className={styles['button--back']} onClick={() => navigate(to)}>
            <span>←</span> Back to suggestions
        </button>
    )
}


import useAuth from '@hooks/useAuth'


export function LogoutButton({className = ''}) {
    const { logout } = useAuth()

    return (
        <button className={`${styles['button--logout']} ${className}`} onClick={logout}><Icons.Logout/>Logout</button>
    )
}

import useSuggestion from '@hooks/useSuggestion'

export function RejectButton({ suggestionId }) {
    const { reject } = useSuggestion()

    return (
        <button className={`${styles['button--reject']} ${styles.button}`} onClick={() => reject(suggestionId)}>
            Submit Rejection
        </button>
    )
}



export function StartReviewButton({ suggestionId }) {
    const { reject } = useSuggestion()

    return (
        <button className={`${styles['button--start-review']} ${styles.button}`} onClick={() => reject(suggestionId)}>
            Start Review Process
        </button>
    )
}
