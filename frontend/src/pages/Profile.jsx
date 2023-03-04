import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import Unknown from "../Images/PersonsUnknown.jpg";

const Profile = () => {

    const {user} = useSelector((state) => state.auth);

    return (

        <div className='profileContainer'>

            <div className='profileLeftColumn'>
                <div className='profileLE1'>
                    <img src={Unknown} alt="Unknown Person"/>
                </div>
                <div className='profileLE2'>
                    <h3>Name</h3>
                    <p>{user.name}</p>
                </div>
                <div className='profileLE3'>
                    <h3>Email</h3>
                    <p>{user.email}</p>
                </div>
            </div>

            <div className='profileRightColumn'>
                <h1>Saved Forms</h1>
                <h3>Investigative Form Name Here</h3>
            </div>

        </div>

    )
}

export default Profile;