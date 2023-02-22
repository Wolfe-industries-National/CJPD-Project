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
                <img src={Unknown} alt="Unknown Person" height={70} />
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            <div className='profileRightColumn'>
                <h3>Forms Saved:</h3>
            </div>
        </div>

    )
}

export default Profile;