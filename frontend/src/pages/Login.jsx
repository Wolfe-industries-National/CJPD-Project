import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData;

    const dispatch = useDispatch();

    const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);

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