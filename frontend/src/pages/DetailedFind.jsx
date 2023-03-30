import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
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
    const [allFastFindPages, setAllFastFindPages] = useState([<DFPerson/>, <DFOccurrence/>, <DFBusOrg/>, <DFProperty/>, <DFVehicle/>, <DFAddress/>])
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(() => {
        if(!itemForSearch){
            navigate('/detailedFind/person');
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
        <div className="DFOuterContainer">
            <div className="DFInnerContainer">
                <div className="DFLeftColumn">
                    <p>Category</p><br/>
                    <span><Link className="DFLeftButtons" to="../detailedFind/person">Person</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../detailedFind/bus-org">Bus/Org</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../detailedFind/property">Property</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../detailedFind/vehicle">Vehicle</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../detailedFind/address">Address</Link><br/></span>
                </div>

                <div className="DFRightColumn">
                    <div>
                        {allFastFindPages[currentPageIndex]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedFind;