import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createBusOrg} from "../../features/busOrg/busOrgSlice";

const MDBusOrg = () => {

    const [formData, setFormData] = useState({
        owner: '',
        name: '',
        typeOfBusOrg: '',
        address: '',
        alarmCompany: '',
        telephoneNumber: ''
    })
    const [successMessage, setSuccessMessage] = useState('');

    const {owner, name, typeOfBusOrg, address, alarmCompany, telephoneNumber} = formData;

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createBusOrg(formData));
        setSuccessMessage(`Successfuly created Business or Organization`);
        setFormData({
            owner: '',
            name: '',
            typeOfBusOrg: '',
            address: '',
            alarmCompany: '',
            telephoneNumber: ''
        })
        console.log(formData);
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Business / Organization</h3>
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
                            <input className="DFUniversalFields" type="text" name="alarmCompany" placeholder="Telus Security"  value={alarmCompany} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="text" name="telephoneNumber" placeholder="(000) 000-0000" value={telephoneNumber} onChange={onChange}/>
                        </label>
                    </div>
                </div>
                <div className="DFBottomBar">
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Clear All</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Update</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Delete</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton2">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MDBusOrg;