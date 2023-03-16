import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import FinalLogoImageCJPD from '../Images/FinalLogoImageCJPD.png';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);

    useEffect(() => {
        if(isError){
            toast.error(message);
        }

        // Redirect to Home page when logged in
        if(isSuccess || user){
            navigate('/');
        }

        dispatch(reset());
    }, [isError, isSuccess, user, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    }

    return (
        <div className='loginContainer'>
            <div className='loginTextContainer'>
                <img src={FinalLogoImageCJPD} alt="Home Image" height='40%' width='20%'/>
            </div>
            <div className='loginFormContainer'>
                <form onSubmit={onSubmit}>
                    <label className='loginLabel' htmlFor="email">
                        LC Email<br/>
                        <input className='loginTextFields' type="email" id='email' name='email' value={email} onChange={onChange} />
                    </label><br />
                    <label className='loginLabel' htmlFor="password">
                        Password<br/>
                        <input className='loginTextFields' type="password" id='password' name='password' value={password} onChange={onChange} />
                    </label><br />
                    <div className='loginButtonContainer'>
                        <button className='loginButton'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login