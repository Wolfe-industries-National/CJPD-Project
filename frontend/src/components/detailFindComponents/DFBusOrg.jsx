import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {detailSearchBusOrg} from "../../features/busOrg/busOrgSlice";
import { Link } from "react-router-dom";

const DFBusOrg = () => {

    const [searchData, setSearchData] = useState({
        owner: '',
        name: '',
        typeOfBusOrg: '',
        address: '',
        alarmCompany: '',
        telephoneNumber: ''
    });

    const {owner, name, typeOfBusOrg, address, alarmCompany, telephoneNumber} = searchData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {busOrgs} = useSelector((state) => state.busOrg);
    let busOrgList = [];

    const onChange = (e) => {
        setSearchData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(detailSearchBusOrg(searchData));
        busOrgList = busOrgs;
        console.log(busOrgList);
    }

    const clearFields = () => {
        setSearchData({
            owner: '',
            name: '',
            typeOfBusOrg: '',
            address: '',
            alarmCompany: '',
            telephoneNumber: ''
        })
    }

    return (
        <div className="DFUniversalContainer">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                <h3 className="DFUniversalTitle" style={{marginBottom: 0}}>Detailed Find Business / Organization</h3>
                <div className="DFBottomBarInnerContainer">
                    <Link className="DFBottomBarButton2" to='/fastFind/bus-org'>Switch to Fast Find</Link>
                </div>
            </div>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner<br/></div>
                            <input className="DFUniversalFields" type="text" name="owner" placeholder="First & Last Name" value={owner} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Business<br/></div>
                            <input className="DFUniversalFields" type="text" name="name" placeholder="Random Incorporated ltd." value={name} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="typeOfBusOrg" placeholder="Convenience Store" value={typeOfBusOrg} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Address<br/></div>
                            <input className="DFUniversalFields" type="text" name="address" placeholder="123 Random Place Blvd. W, Lethbridge AB" value={address} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Alarm Company<br/></div>
                            <input className="DFUniversalFields" type="text" name="alarmCompany" placeholder="Telus Security" value={alarmCompany} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="text" name="telephoneNumber" placeholder="(000) 000-0000" value={telephoneNumber} onChange={onChange}/>
                        </label>
                    </div>
                </div>
            </form>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={clearFields}>Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={onSubmit}>Find Now</button>
                </div>
            </div>

            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Owner<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Business<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Type<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Address<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Telephone<br/></div>
                    </div>
                </div>
                {
                    busOrgs.map((item) => <div className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/bus-org/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner ? item.owner : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.name ? item.name : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.typeOfBusOrg ? item.typeOfBusOrg : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.address ? item.address : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.telephoneNumber ? item.telephoneNumber : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default DFBusOrg;