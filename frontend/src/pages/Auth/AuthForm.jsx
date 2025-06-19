import { useState, useEffect } from 'react'
import useForm from '@hooks/useForm'
import useAuth from '@hooks/useAuth'

const defaultData = {
    name: '',
    email: '',
    password: '',
    passwordConfirmed: ''
};

export default function AuthForm() {
    const { login, register, message, setMessage } = useAuth();
    const [canSubmit, setCanSubmit] = useState(false)
    const [passwordsMatch, setPasswordsMatch] = useState(true)



    const [formData, onFormChange, resetForm] = useForm({ defaultData })
    const [newUser, setNewUser] = useState(false)

    useEffect(() => {
        if (newUser) {
            const bothFilled = formData.password !== '' && formData.passwordConfirmed !== '';
            if (bothFilled) {
                setPasswordsMatch(formData.password === formData.passwordConfirmed);
            } else {
                setPasswordsMatch(true);
            }
        }
    }, [formData.password, formData.passwordConfirmed, newUser]);


    
    useEffect(() => {
        if (!newUser) {
            setCanSubmit(formData.email !== '' && formData.password !== '');
        } else {
            const allFilled = Object.values(formData).every(
                val => val !== '' && val !== null && val !== undefined
            );
            setCanSubmit(allFilled && passwordsMatch);
        }
    }, [formData, newUser, passwordsMatch]);


    const handleToggle = () => {
        resetForm();
        setNewUser(!newUser)
        setCanSubmit(false)
        setMessage('')
    }


    return (
        <form className='flx algn-left  clmn  auth-form' onSubmit={(e) => { e.preventDefault(); newUser? register(formData) : login(formData) }}>
            <h1 className='auth-heading'>{newUser ? 'Get Started' : 'Welcome Back'}</h1>

            {newUser &&
                <div className='field'>
                    <label className='auth-label' htmlFor='name'>Full Name</label>
                    <input
                        value={formData.name}
                        name='name'
                        className='auth-input'
                        type='text'
                        placeholder='John Doe'
                        onChange={e => onFormChange('name', e.target.value)}
                    />
                </div>
            }


            <div className='field'>
                <label className='auth-label' htmlFor='email'>Email</label>
                <input
                    value={formData.email}
                    name='email'
                    className='auth-input'
                    type='text'
                    placeholder='name@email.com'
                    onChange={e => onFormChange('email', e.target.value)}
                />
            </div>


            <div className='field'>
                <label className='auth-label' htmlFor='password'>Password</label>
                <input
                    value={formData.password}
                    name='password'
                    className='auth-input'
                    type='password'
                    placeholder='••••••••'
                    onChange={e => onFormChange('password', e.target.value)}
                />
            </div>


            {newUser &&
                <div className='field'>

                    <div className='flex justify-between align-start'>
                        <label className='auth-label' htmlFor='password-confirmed'>Confirm Password </label>
                        {!passwordsMatch && <p className='warning'>passwords must match</p>}
                    </div>

                    <input
                        value={formData.passwordConfirmed}
                        name='password-confirmed'
                        className='auth-input'
                        type='password'
                        placeholder='••••••••'
                        onChange={e => onFormChange('passwordConfirmed', e.target.value)}
                    />
                </div>
            }


            {newUser ? (
                <p>Already have an account? <span className='type' onClick={handleToggle}>Sign In</span></p>
            ) : (
                <p>Don't have an account? <span className='type' onClick={handleToggle}>Sign Up</span></p>
            )}

            <button type='submit' disabled={!canSubmit} className={`monts auth-bttn ${!canSubmit ? 'disabled' : ''}`}>{newUser ? 'Sign Up' : 'Sign In'}</button>
            {message && <p>{message}</p>}
        </form>
    )
}
