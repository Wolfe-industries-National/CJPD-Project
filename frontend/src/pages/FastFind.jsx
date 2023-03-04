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
        <div>
            <h3>Fast Find</h3>
            {rightSidePannel}
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