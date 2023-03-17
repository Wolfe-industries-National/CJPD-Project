import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {Link, useParams, useNavigate} from "react-router-dom";
import QRPerson from "../components/queryResultComponents/QRPerson";
import QROccurrence from "../components/queryResultComponents/QROccurrence";
import QRBusOrg from "../components/queryResultComponents/QRBusOrg";
import QRProperty from "../components/queryResultComponents/QRProperty";
import QRVehicle from "../components/queryResultComponents/QRVehicle";
import QRAddress from "../components/queryResultComponents/QRAddress";

const QueryResultPage = () => {

    const {itemForSearch, id} = useParams();
    const navigate = useNavigate();
    const [allResultPages, setAllResultPages] = useState([<QRPerson id={id}/>, <QROccurrence id={id}/>, <QRBusOrg id={id}/>, <QRProperty id={id}/>, <QRVehicle id={id}/>, <QRAddress id={id}/>])
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(() => {
        if(!itemForSearch){
            navigate('/queryResultPage/person');
        }
        switch (itemForSearch) {
            case 'person':
                setCurrentPageIndex(0);
                break;
            case 'occurrence':
                setCurrentPageIndex(1);
                break;
            case 'bus-org':
                setCurrentPageIndex(2);
                break;
            case 'property':
                setCurrentPageIndex(3);
                break;
            case 'vehicle':
                setCurrentPageIndex(4);
                break;
            case 'address':
                setCurrentPageIndex(5);
                break;
            default:
                setCurrentPageIndex(0);
                break;
        }
    }, [navigate, itemForSearch]);

    return (
        <div className="QRContainer">
            <div className="QRInnerContainer">
                {allResultPages[currentPageIndex]}
            </div>
        </div>
    )
}

export default QueryResultPage;