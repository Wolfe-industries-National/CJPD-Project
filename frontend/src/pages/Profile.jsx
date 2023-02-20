import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const {user} = useSelector((state) => state.auth);

    return (
        <div>
            <h3>Profile</h3>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <h3>Forms Saved:</h3>
        </div>
    )
}

export default Profile;