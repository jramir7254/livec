import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '@context/UserProvider';
import { useContext } from 'react';

import acmLogo from '@assets/acm.png'
import './Header.css'

export default function Header() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    return (
        <header>
            <div className='centered gap-1r' onClick={() => navigate('/curriculum')}>
                <div className='logo'>
                    <img className='logo__img ' src={acmLogo}></img>
                </div>
                <h1 className='site-name monts'>LiveC</h1>
            </div>

            <nav className='navigation'>
                <Link className='navigation-item' to={'/curriculum'}>Home</Link>
                {user ?
                    <Link className='navigation-item' to={'/profile'}>Profile</Link>
                    :
                    <Link className='navigation-item' to={'/auth'}>Join</Link>
                }
            </nav>
        </header>
    )
}
