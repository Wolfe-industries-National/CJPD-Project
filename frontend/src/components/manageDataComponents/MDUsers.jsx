import React, {useState} from "react";
import { register } from '../../features/auth/authSlice';
import {toast} from "react-toastify";
import { useDispatch } from 'react-redux';

const MDUsers = () => {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: 'Password1',
        userType: '',
    })

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
        toast.success(`Successfuly created ${name}`);
        setFormData({
            email: '',
            name: '',
            password: 'Password1',
            userType: '',
        })
        console.log(formData);
    }

    const clearFields = () => {
        setFormData({
            email: '',
            name: '',
            password: 'Password1',
            userType: '',
        })
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Users Form</h3>
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
                            <select className="DFUniversalFields" name="userType" value={userType} onChange={onChange}>
                                <option value="Student">Select Type of User</option>
                                <option value="Admin">Admin</option>
                                <option value="Instructor">Instructor</option>
                                <option value="Student">Student</option>
                            </select>
                            {/* <input className="DFUniversalFields" type="text" name="userType" placeholder="Admin, Instructor, Student" value={userType} onChange={onChange}/> */}
                        </label>
                    </div>
                </div>
            </form>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={clearFields}>Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton2" onClick={onSubmit}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default MDUsers;