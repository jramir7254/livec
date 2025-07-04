import AuthForm from './AuthForm'
import styles from './AuthPage.module.scss'

/**
 * Page containing the form where users can either
 * login or register. 
*/

export default function AuthPage() {
    return (
        <section className={styles.container}>
            <div className={styles.sidebar}>

            </div>
            <div className={styles['form-area']}>
                <AuthForm/>
            </div>
        </section>
    )
}
