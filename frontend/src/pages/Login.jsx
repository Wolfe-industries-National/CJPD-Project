import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

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
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">
                    Email
                    <input type="email" id='email' name='email' value={email} onChange={onChange} />
                </label><br />
                <label htmlFor="password">
                    Password
                    <input type="password" id='password' name='password' value={password} onChange={onChange} />
                </label><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login