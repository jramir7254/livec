import React from 'react'
import AuthForm from './AuthForm'
import './AuthPage.css'



export default function AuthPage() {
    return (
        <div className='centered clmn auth-container'>
            <h1 className='auth-heading'>ACM Live Curricula Taskforce</h1>
            <AuthForm/>
        </div>
    )
}
