import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout, reset} from '../features/auth/authSlice';
import logo from "../Images/LCName.png";

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
        <div className='navMainContainer'>
            <div>
                {
                    user ? (
                        <>
                            <div className='navElementContainer'>
                                <img className='navElement1' src={logo} alt="Logo" height={70} />
                                <Link className='navElement2' to='/'>C.J.P.D.</Link>
                                <Link className='navElement3' to='/'>Home</Link>
                                <Link className='navElement4' to='/reportPage'>Investigation Forms</Link>
                                {user.userType === 'Admin' && <Link className='navElement5' to='/reportPage'>Manage Data</Link>}
                                <Link className='navElement6' to='/profile'>{user.name}</Link>
                                <button className='navElement7' onClick={onLogout}>Logout</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link className='navElement8' to='/login'>Login</Link>
                            <Link className='navElement9' to='/register'>Register</Link>
                        </>
                    )}
            </div>
        </div>
    )
}

export default Header