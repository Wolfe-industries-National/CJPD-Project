import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const ReportPage = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();
    const [rightSidePannel, setRightSidePannel] = useState();

    useEffect(() => {
        const locationsOfPage = window.location.pathname.split('/');

    }, [navigate, itemForSearch]);

    return (
        <div className='DFOuterContainer'>

            <div className='DFInnerContainer'>

                <div className='DFLeftColumn'>
                    <p>Select Type of Form</p><br/>
                </div>

                <div className='DFRightColumn'>
                    <tr>
                        <td>
                            <h3>Form</h3>
                        </td>
                    </tr>
                    <div className='DFBottomBar'>
                        <span><button>Clear All</button></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReportPage;