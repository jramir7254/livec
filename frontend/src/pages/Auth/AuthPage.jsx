import AuthForm from './AuthForm'
import './AuthPage.css'

/**
 * Page containing the form where users can either
 * login or register. 
*/

export default function AuthPage() {
    return (
        <div className='centered clmn auth-container'>
            <AuthForm/>
        </div>
    )
}
