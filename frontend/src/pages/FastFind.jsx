import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from "react-router-dom";

const FastFind = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!itemForSearch){
            navigate('/fastFind/person');
        }
    }, [navigate, itemForSearch]);


    return (
        <div>
            <h3>Fast Find</h3>
            <p>{itemForSearch}</p>
            <input type='text' placeholder='Name' />
            <div>
                <h4>Results</h4>
            </div>
            <button>Clear All</button>
            <button>Find Now</button>
            <Link to={`/detailedFind/${itemForSearch}`}>Switch to Detailed Find</Link>
        </div>
    )
}

export default FastFind;