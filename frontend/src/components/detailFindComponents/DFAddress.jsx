import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {detailSearchAddress, reset} from "../../features/address/addressSlice";
import { Link } from "react-router-dom";

const DFAddress = () => {

    const [searchData, setSearchData] = useState({
        owner: '',
        typeOfBuilding: '',
        vacant: '',
        country: '',
        province: '',
        city: '',
        address: '',
    });

    const {owner, typeOfBuilding, vacant, country, province, city, address} = searchData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {addresses} = useSelector((state) => state.address);
    let addressList = [];

    const onChange = (e) => {
        setSearchData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('searchData from the form in DFAddress:', searchData);
        dispatch(detailSearchAddress(searchData));
        addressList = addresses;
        console.log(addressList);
    }

    const clearFields = () => {
        setSearchData({
            owner: '',
        typeOfBuilding: '',
        vacant: '',
        country: '',
        province: '',
        city: '',
        address: '',
        })
    }

    return (
        <div className="DFUniversalContainer">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                <h3 className="DFUniversalTitle" style={{marginBottom: 0}}>Detailed Find Address</h3>
                <div className="DFBottomBarInnerContainer">
                    <Link className="DFBottomBarButton2" to='/fastFind/address'>Switch to Fast Find</Link>
                </div>
            </div>
            <form className="DFUniversalForm" onSubmit={onSubmit}>
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner / Tenant<br/></div>
                            <input className="DFUniversalFields" type="text" name="owner" placeholder="First & Last Name" value={owner} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Building Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="typeOfBuilding" placeholder="House, Apartment, Hotel, Etc." value={typeOfBuilding} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="CheckboxInnerTitle">Vacant<br/></div>
                            <div className="UniversalRadioContainer">
                                <div className="RadioChoiceContainer">
                                    <input id="DFARadioYes" className="UniversalRadioFix" type="radio" name="vacant" value={true} onChange={onChange}/>
                                    <label htmlFor="DFARadioYes">Yes</label>
                                </div>
                                <div className="RadioChoiceContainer">
                                    <input id="DFARadioNo" className="UniversalRadioFix" type="radio" name="vacant" value={false} onChange={onChange}/>
                                    <label htmlFor="DFARadioNo">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Country<br/></div>
                            <input className="DFUniversalFields" type="text" name="country" placeholder="Canada" value={country} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Province<br/></div>
                            <input className="DFUniversalFields" type="text" name="province" placeholder="Alberta" value={province} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">City<br/></div>
                            <input className="DFUniversalFields" type="text" name="city" placeholder="Lethbridge" value={city} onChange={onChange}/>
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
            </form>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={clearFields}>Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={onSubmit}>Find Now</button>
                </div>
            </div>
        </div>
    )
}

export default DFAddress;