import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout, reset} from '../features/auth/authSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/login');
    }

    return (
        <div style={{backgroundColor: '#01244C', color: 'white', padding: '1rem'}}>
            <Link style={{color: 'white'}} to='/'>CJPD</Link>
            <ul>
                {
                    user ? (
                        <>
                            <li><Link style={{color: 'white'}} to='/'>Home</Link></li>
                            <li><Link style={{color: 'white'}} to='/reportPage'>Investigation Forms</Link></li>
                            {user.userType === 'Admin' && <li><Link style={{color: 'white'}} to='/reportPage'>Manage Data</Link></li>}
                            <li><Link style={{color: 'white'}} to='/profile'>{user.name}</Link></li>
                            <li><button onClick={onLogout}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link style={{color: 'white'}} to='/login'>Login</Link></li>
                            <li><Link style={{color: 'white'}} to='/register'>Register</Link></li>
                        </>
                    )}
            </ul>
        </div>
    )
}

export default Header