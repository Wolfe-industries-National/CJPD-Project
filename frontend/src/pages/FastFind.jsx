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
    const [allFastFindPages, setAllFastFindPages] = useState([<FFPerson/>, <FFOccurrence/>, <FFBusOrg/>, <FFProperty/>, <FFVehicle/>, <FFAddress/>, <FFOfficerUnit/>, <FFTelephone/>])
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(() => {
        if(!itemForSearch){
            navigate('/fastFind/person');
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
            case 'officer-unit':
                setCurrentPageIndex(6);
                break;
            case 'telephone':
                setCurrentPageIndex(7);
                break;
            default:
                setCurrentPageIndex(0);
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
                    <div>
                        {allFastFindPages[currentPageIndex]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FastFind;