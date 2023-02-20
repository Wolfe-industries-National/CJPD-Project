import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import {useSelector, useDispatch} from 'react-redux';
import { register, reset } from '../features/auth/authSlice';

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: ''
    })

    const {name, email, password, userType} = formData;

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
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFormData((prevState) => ({
            ...prevState,
            password: 'Password1'
        }));
        dispatch(register({name, email, password: 'Password1', userType}));
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">
                    Name
                    <input type="text" id='name' name='name' value={name} onChange={onChange} />
                </label><br />
                <label htmlFor="email">
                    Email
                    <input type="email" id='email' name='email' value={email} onChange={onChange} />
                </label><br />
                <label htmlFor="userType">
                    <select name="userType" id="userType" value={userType} onChange={onChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Admin">Admin</option>
                    </select>
                </label><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register