import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const DetailedFind = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!itemForSearch){
            navigate('/detailedFind/person');
        }
    }, [navigate, itemForSearch]);

    return (
        <div>
            <h3>Detailed Find</h3>
            <p>{itemForSearch}</p>
            <input type='text' placeholder='Name' />
            <div>
                <h4>Results</h4>
            </div>
            <button>Clear All</button>
            <button>Find Now</button>
            <Link to={`/fastFind/${itemForSearch}`}>Switch to Fast Find</Link>
        </div>
    )
}

export default DetailedFind;