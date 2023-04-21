import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Unknown from "../Images/PersonsUnknown.jpg";
import {getAll, resetPassword, changePasswordUser, logout, reset} from "../features/auth/authSlice";

const Profile = () => {

    const [passwordFormData, setPasswordFormData] = useState({
        password1: '',
        password2: ''
    });
    const {password1, password2} = passwordFormData;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, users, isSuccess} = useSelector((state) => state.auth);

    const resetPass = (userId, username) => {
        dispatch(resetPassword({userID: userId}));
        toast.success(`${username}'s password reset`);
    }

    const changePass = (e) => {
        e.preventDefault();
        if(password1 === password2){
            dispatch(changePasswordUser({userId: user._id,newPassword: password1}));
            toast.success(`${user.name}'s password changed`);
            dispatch(logout());
            dispatch(reset());
            navigate("/login");
        }else{
            toast.error(`New passwords must match`);
        }
    }

    const onChange = (e) => {
        setPasswordFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    return (

        <div style={{paddingBottom: '5rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div style={{border: '2px solid #01244C', borderRadius: '40px', backgroundColor: '#FFFFFF', textAlign: 'center', width: '40rem'}}>
                    <div >
                        <img style={{width: '12rem'}} src={Unknown} alt="Unknown Person"/>
                    </div>
                    <div style={{fontSize: '1.4rem'}}>
                        <h3>Name</h3>
                        <p>{user.name}</p>
                    </div>
                    <div style={{fontSize: '1.4rem'}}>
                        <h3>Email</h3>
                        <p>{user.email}</p>
                    </div>

                </div>

                { user.userType !== 'Student' && 
                    <div className="profileRightColumn" style={{color: 'white'}}>
                        <h1 style={{fontSize: '2rem'}}>Change Password:</h1>
                        <form onSubmit={changePass}>
                            <label htmlFor="password1">
                                New Password:
                                <input type="text" name="password1" id="password1" placeholder="new Password" value={password1} onChange={onChange} />
                            </label><br />
                            <label htmlFor="password2">
                                Confirm New Password:
                                <input type="text" name="password2" id="password2" placeholder="confirm new Password" value={password2} onChange={onChange} />
                            </label><br />
                            <button>Submit</button>
                        </form>
                    </div>
                }

            </div>

            { user.userType === 'Admin' &&
                <div style={{border: '2px solid #01244C', borderRadius: '40px', backgroundColor: '#FFFFFF', textAlign: 'center', width: '80rem', margin: '3rem auto'}}>
                    <div style={{fontSize: '1.4rem'}}>
                        <h3>List of Users:</h3>
                        <div style={{ padding: '0.5rem', display: 'flex', justifyContent: 'space-between', margin: '1rem 0.5rem'}}>
                            <p>Name</p>
                            <p>Email</p>
                            <p>Type of User</p>
                            <p>Action</p>
                        </div>
                        {
                        users.map((item, index) => <div style={{ backgroundColor: index%2===0 && 'lightblue', padding: '0.5rem', display: 'flex', justifyContent: 'space-between', margin: '1rem 0.5rem'}}>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.userType}</p>
                                <button onClick={() => resetPass(item._id, item.name)}>Reset Password</button>
                        </div>)
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile;