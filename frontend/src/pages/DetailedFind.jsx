import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import DFAddress from "../components/detailFindComponents/DFAddress";
import DFBusOrg from "../components/detailFindComponents/DFBusOrg";
import DFOccurrence from "../components/detailFindComponents/DFOccurence";
import DFPerson from "../components/detailFindComponents/DFPerson";
import DFProperty from "../components/detailFindComponents/DFProperty";
import DFVehicle from "../components/detailFindComponents/DFVehicle";

const DetailedFind = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();
    const [rightSidePannel, setRightSidePannel] = useState();

    useEffect(() => {
        if(!itemForSearch){
            navigate('/detailedFind/person');
        }
        const locationsOfPage = window.location.pathname.split('/');
        switch (locationsOfPage[2]) {
            case 'person':
                setRightSidePannel(DFPerson);
                break;
            case 'occurrence':
                setRightSidePannel(DFOccurrence);
                break;
            case 'bus-org':
                setRightSidePannel(DFBusOrg);
                break;
            case 'property':
                setRightSidePannel(DFProperty);
                break;
            case 'vehicle':
                setRightSidePannel(DFVehicle);
                break;
            case 'address':
                setRightSidePannel(DFAddress);
                break;
            default:
                setRightSidePannel(DFPerson);
                break;
        }
    }, [navigate, itemForSearch]);

    return (
        <div className='DFOuterContainer'>

            <div className='DFInnerContainer'>

                <div className='DFLeftColumn'>
                    <p>Category</p><br/>
                    <span><Link className='DFLeftButtons' to='../detailedFind/person'>Person</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../detailedFind/occurrence'>Occurrence</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../detailedFind/bus-org'>Bus/Org</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../detailedFind/property'>Property</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../detailedFind/vehicle'>Vehicle</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../detailedFind/address'>Address</Link></span>
                </div>

                <div className='DFRightColumn'>
                    {/*Probably somewhere around here*/}
                    {/*it will check for the page and then it will return the correct componenet for that page*/}
                    <tr>
                        <td>
                            <h3>Detailed Find</h3>
                        </td>
                    </tr>
                    {rightSidePannel}
                    <tr>
                        <td>
                            <h4>Results</h4>
                        </td>
                    </tr>

                    <div className='DFBottomBar'>
                        <span><button>Clear All</button></span>
                        <span><button>Find Now</button></span>
                        <span><Link to={`/fastFind/${itemForSearch}`}>Switch to Fast Find</Link></span>
                    </div>

                </div>




            </div>

        </div>
    )
}

export default DetailedFind;