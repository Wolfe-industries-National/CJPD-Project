import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Unknown from "../Images/PersonsUnknown.jpg";
import {logout, reset} from "../features/auth/authSlice";

const Profile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    return (

        <div className="profileContainer">

            <div className="profileLeftColumn">
                <div className="profileLE1">
                    <img src={Unknown} alt="Unknown Person"/>
                </div>
                <div className="profileLE2">
                    <h3>Name</h3>
                    <p>{user.name}</p>
                </div>
                <div className="profileLE3" style={{marginTop: "1.5rem"}}>
                    <h3>Email</h3>
                    <p>{user.email}</p>
                </div>

            </div>

            <div className="profileRightColumn" style={{color: 'white'}}>
                <h1 style={{fontSize: '2rem'}}>Change Password:</h1>
                <form action="">
                    <label htmlFor="">
                        Old Password:
                        <input type="text" />
                    </label><br />
                    <label htmlFor="">
                        New Password:
                        <input type="text" />
                    </label><br />
                    <label htmlFor="">
                        Confirm New Password:
                        <input type="text" />
                    </label><br />
                    <button>Submit</button>
                </form>
            </div>

        </div>

    )
}

export default Profile;