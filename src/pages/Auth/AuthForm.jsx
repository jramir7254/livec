import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthForm() {
    const navigate = useNavigate()


    return (
        <form className='centered clmn auth-form'>
            <label className='auth-label' htmlFor='email'>Email</label>
            <input name='email' className='auth-input' type='text' placeholder='Email' />

            <label className='auth-label' htmlFor='password'>Password</label>
            <input name='password' className='auth-input' type='password' placeholder='Password' />

            <button onClick={() => navigate('/curriculum')} className='auth-bttn' >Sign In</button>
        </form>
    )
}
