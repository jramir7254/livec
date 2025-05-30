
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthForm() {

    // authType of true means user is logging in
    const [authType, setAuthType] = useState(true)
    const navigate = useNavigate()


    return (
        <form className='flx algn-left  clmn  auth-form'>
            <h1 className='auth-heading'>{authType ? 'Welcome Back' : 'Get Started'}</h1>

            <div className='field'>
                <label className='auth-label' htmlFor='email'>Email</label>
                <input name='email' className='auth-input' type='text' placeholder='name@email.com' />
            </div>

            <div className='field'>
                <label className='auth-label' htmlFor='password'>Password</label>
                <input name='password' className='auth-input' type='password' placeholder='••••••••' />
            </div>


            {authType ? (
                <p>Don't have an account? <span className='type' onClick={() => setAuthType(!authType)}>Sign Up</span></p>
            ) : (
                <p>Already have an account? <span className='type' onClick={() => setAuthType(!authType)}>Sign In</span></p>
            )}

            <button onClick={() => navigate('/curriculum')} className='monts auth-bttn' >{authType ? 'Sign In' : 'Sign Up'}</button>
        </form>
    )
}
