import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams, useNavigate} from 'react-router-dom';
import MDAddress from '../components/manageDataComponents/MDAddress';
import MDBusOrg from '../components/manageDataComponents/MDBusOrg';
import MDOccurrence from '../components/manageDataComponents/MDOccurrence';
import MDOfficerUnit from '../components/manageDataComponents/MDOfficerUnit';
import MDPerson from '../components/manageDataComponents/MDPerson';
import MDProperty from '../components/manageDataComponents/MDProperty';
import MDTelephone from '../components/manageDataComponents/MDTelephone';
import MDUsers from '../components/manageDataComponents/MDUsers';
import MDVehicle from '../components/manageDataComponents/MDVehicle';


const ManagaData = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();
    const [rightSidePannel, setRightSidePannel] = useState();

    useEffect(() => {
        if(!itemForSearch){
            navigate('/manageData/person');
        }
        const locationsOfPage = window.location.pathname.split('/');
        switch (itemForSearch) {
            case 'person':
                setRightSidePannel(MDPerson);
                break;
            case 'occurrence':
                setRightSidePannel(MDOccurrence);
                break;
            case 'bus-org':
                setRightSidePannel(MDBusOrg);
                break;
            case 'property':
                setRightSidePannel(MDProperty);
                break;
            case 'vehicle':
                setRightSidePannel(MDVehicle);
                break;
            case 'address':
                setRightSidePannel(MDAddress);
                break;
            case 'officer-unit':
                setRightSidePannel(MDOfficerUnit);
                break;
            case 'telephone':
                setRightSidePannel(MDTelephone);
                break;
            case 'users':
                setRightSidePannel(MDUsers);
                break;
            default:
                setRightSidePannel(MDPerson);
                break;
        }
    }, [navigate, itemForSearch]);

    return (
        <div className='DFOuterContainer'>

            <div className='DFInnerContainer'>

                <div className='DFLeftColumn'>
                    <p>Category</p><br/>
                    <span><Link className='DFLeftButtons' to='../manageData/person'>Person</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../manageData/occurrence'>Occurrence</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../manageData/bus-org'>Bus/Org</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../manageData/property'>Property</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../manageData/vehicle'>Vehicle</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../manageData/address'>Address</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../manageData/telephone'>Telephone</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../manageData/officer-unit'>Officer / Unit</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../manageData/users'>Users</Link><br/></span>
                </div>

                <div className='FFRightColumn'>
                    <div>
                        {rightSidePannel}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagaData;