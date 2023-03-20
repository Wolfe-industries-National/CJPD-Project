import React, {useState} from "react";
import { register } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const MDUsers = () => {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: 'Password1',
        userType: '',
    })
    const [successMessage, setSuccessMessage] = useState('');

    const {name, email, password, userType} = formData;

    const dispatch = useDispatch();
    // const {user, isSuccess, isError} = useSelector((state) => state.auth);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData));
        setSuccessMessage(`Successfuly created ${name}`);
        setFormData({
            email: '',
            name: '',
            password: 'Password1',
            userType: '',
        })
        console.log(formData);
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Users Form</h3>
            <h3 className="DFUniversalTitle">{successMessage}</h3>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Lethbridge College Email<br/></div>
                            <input className="DFUniversalFields" type="text" name="email" placeholder="your.name@lethbridgecollege.ca" value={email} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Name<br/></div>
                            <input className="DFUniversalFields" type="text" name="name" placeholder="Name" value={name} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">User Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="userType" placeholder="Admin, Instructor, Student" value={userType} onChange={onChange}/>
                        </label>
                    </div>
                </div>
                <div className="DFBottomBar">
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Clear All</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Update</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Delete</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton2">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MDUsers;