import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from "react-router-dom";
import FFAddress from "../components/fastfindComponenets/FFAddress";
import FFBusOrg from "../components/fastfindComponenets/FFBusOrg";
import FFOccurrence from "../components/fastfindComponenets/FFOccurrence";
import FFOfficerUnit from "../components/fastfindComponenets/FFOfficerUnit";
import FFPerson from "../components/fastfindComponenets/FFPerson";
import FFProperty from "../components/fastfindComponenets/FFProperty";
import FFTelephone from "../components/fastfindComponenets/FFTelephone";
import FFVehicle from "../components/fastfindComponenets/FFVehicle";


const FastFind = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();
    const [rightSidePannel, setRightSidePannel] = useState();

    useEffect(() => {
        if(!itemForSearch){
            navigate('/fastFind/person');
        }
        const locationsOfPage = window.location.pathname.split('/');
        switch (locationsOfPage[2]) {
            case 'person':
                setRightSidePannel(FFPerson);
                break;
            case 'occurrence':
                setRightSidePannel(FFOccurrence);
                break;
            case 'bus-org':
                setRightSidePannel(FFBusOrg);
                break;
            case 'property':
                setRightSidePannel(FFProperty);
                break;
            case 'vehicle':
                setRightSidePannel(FFVehicle);
                break;
            case 'address':
                setRightSidePannel(FFAddress);
                break;
            case 'officer-unit':
                setRightSidePannel(FFOfficerUnit);
                break;
            case 'telephone':
                setRightSidePannel(FFTelephone);
                break;
            default:
                setRightSidePannel(FFPerson);
                break;
        }
    }, [navigate, itemForSearch]);


    return (
        <div className='DFOuterContainer'>

            <div className='DFInnerContainer'>

                <div className='DFLeftColumn'>
                    <p>Category</p><br/>
                    <span><Link className='DFLeftButtons' to='../fastFind/person'>Person</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../fastFind/occurrence'>Occurrence</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../fastFind/bus-org'>Bus/Org</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../fastFind/property'>Property</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../fastFind/vehicle'>Vehicle</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../fastFind/address'>Address</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../fastFind/telephone'>Telephone</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../fastFind/officer-unit'>Officer / Unit</Link><br/></span>
                </div>

                <div className='FFRightColumn'>
                    {/*Probably somewhere around here*/}
                    {/*it will check for the page and then it will return the correct componenet for that page*/}
                    <div>
                        {rightSidePannel}

                        <div className='DFBottomBar'>
                            <div class='DFBottomBarInnerContainer'>
                                <button class='DFBottomBarButton1'>Clear All</button>
                            </div>
                            <div class='DFBottomBarInnerContainer'>
                                <button class='DFBottomBarButton1'>Find Now</button>
                            </div>
                            <div class='DFBottomBarInnerContainer'>
                                <button class='DFBottomBarButton2' to={`/fastFind/${itemForSearch}`}>Switch to Fast Find</button>
                            </div>
                        </div>
                    </div>


                </div>




            </div>

        </div>
    )
}

export default FastFind;