import React, {useState} from "react";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {createNewAddress} from "../../features/address/addressSlice";

const MDAddress = () => {

    const [formData, setFormData] = useState({
        owner: '',
        typeOfBuilding: '',
        vacant: false,
        country: '',
        province: '',
        city: '',
        address: ''
    })

    const {owner, typeOfBuilding, vacant, country, province, city, address} = formData;

    const dispatch = useDispatch();
    // const {address, isSuccess, isError} = useSelector((state) => state.address);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewAddress(formData));
        toast.success(`Successfuly created ${address}`);
        setFormData({
            owner: '',
            typeOfBuilding: '',
            vacant: false,
            country: '',
            province: '',
            city: '',
            address: ''
        })
        console.log(formData);
    }

    const clearFields = () => {
        setFormData({
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
            <h3 className="DFUniversalTitle">Manage Address</h3>
            <form className="DFUniversalForm">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner / Tenant<br/></div>
                            <input className="DFUniversalFields" type="text" name="owner" value={owner} placeholder="First & Last Name" onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Building Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="typeOfBuilding" value={typeOfBuilding} placeholder="House, Apartment, Hotel, Etc." onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="CheckboxInnerTitle">Vacant<br/></div>
                            <div className="UniversalRadioContainer">
                                <div className="RadioChoiceContainer">
                                    <input id="MDRadioYes" className="UniversalRadioFix" type="radio" name="vacant" value={true}/>
                                    <label for="MDRadioYes">Yes</label>
                                </div>
                                <div className="RadioChoiceContainer">
                                    <input id="MDRadioNo" className="UniversalRadioFix" type="radio" name="vacant" value={false}/>
                                    <label for="MDRadioNo">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Country<br/></div>
                            <input className="DFUniversalFields" type="text" name="country" value={country} placeholder="Canada" onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Province<br/></div>
                            <input className="DFUniversalFields" type="text" name="province" value={province} placeholder="Alberta" onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">City<br/></div>
                            <input className="DFUniversalFields" type="text" name="city" value={city} placeholder="Lethbridge" onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Address<br/></div>
                            <input className="DFUniversalFields" type="text" name="address" value={address} placeholder="123 Random Place Blvd. W" onChange={onChange}/>
                        </label>
                    </div>
                </div>
            </form>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={clearFields}>Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton2" onClick={onSubmit}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default MDAddress;