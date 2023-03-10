import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams, useNavigate} from 'react-router-dom';
import QRPerson from "../components/queryResultComponents/QRPerson";
import QROccurrence from "../components/queryResultComponents/QROccurrence";
import QRBusOrg from "../components/queryResultComponents/QRBusOrg";
import QRProperty from "../components/queryResultComponents/QRProperty";
import QRVehicle from "../components/queryResultComponents/QRVehicle";
import QRAddress from "../components/queryResultComponents/QRAddress";

const QueryResultPage = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();
    const [centerPannel, setCenterPannel] = useState();

    useEffect(() => {
        if(!itemForSearch){
            navigate('/queryResultPage/person');
        }
        const locationsOfPage = window.location.pathname.split('/');
        switch (locationsOfPage[2]) {
            case 'person':
                setCenterPannel(QRPerson);
                break;
            case 'occurrence':
                setCenterPannel(QROccurrence);
                break;
            case 'bus-org':
                setCenterPannel(QRBusOrg);
                break;
            case 'property':
                setCenterPannel(QRProperty);
                break;
            case 'vehicle':
                setCenterPannel(QRVehicle);
                break;
            case 'address':
                setCenterPannel(QRAddress);
                break;
            default:
                setCenterPannel(QRPerson);
                break;
        }
    }, [navigate, itemForSearch]);

    return (
        <div class='QRContainer'>
            <div class='QRInnerContainer'>
                {centerPannel}
            </div>
        </div>
    )
}

export default QueryResultPage;