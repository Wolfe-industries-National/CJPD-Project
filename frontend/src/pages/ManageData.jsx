import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {Link, useParams, useNavigate} from "react-router-dom";
import MDAddress from "../components/manageDataComponents/MDAddress";
import MDBusOrg from "../components/manageDataComponents/MDBusOrg";
import MDOccurrence from "../components/manageDataComponents/MDOccurrence";
import MDOfficerUnit from "../components/manageDataComponents/MDOfficerUnit";
import MDPerson from "../components/manageDataComponents/MDPerson";
import MDProperty from "../components/manageDataComponents/MDProperty";
import MDTelephone from "../components/manageDataComponents/MDTelephone";
import MDUsers from "../components/manageDataComponents/MDUsers";
import MDVehicle from "../components/manageDataComponents/MDVehicle";
import Footer from '../components/Footer';

const ManageData = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();

    const [allManageDataPages, setAllManageDataPages] = useState([<MDPerson/>, <MDOccurrence/>, <MDBusOrg/>, <MDProperty/>, <MDVehicle/>, <MDAddress/>, <MDOfficerUnit/>, <MDTelephone/>, <MDUsers/>]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(() => {
        if (!itemForSearch) {
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
            case 'users':
                setCurrentPageIndex(8);
                break;
            default:
                setCurrentPageIndex(0);
                break;
        }
    }, [itemForSearch, navigate]);

    return (
        <div className="DFOuterContainer">

            <div className="DFInnerContainer">

                <div className="DFLeftColumn">
                    <p>Category</p><br/>
                    <span><Link className="DFLeftButtons" to="../manageData/person">Person</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../manageData/occurrence">Occurrence</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../manageData/bus-org">Bus/Org</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../manageData/property">Property</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../manageData/vehicle">Vehicle</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../manageData/address">Address</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../manageData/telephone">Telephone</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../manageData/officer-unit">Officer / Unit</Link><br/></span>
                    <span><Link className="DFLeftButtons" to="../manageData/users">Users</Link><br/></span>
                </div>

                <div className="DFRightColumn">
                    <div>
                        {allManageDataPages[currentPageIndex]}
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default ManageData;