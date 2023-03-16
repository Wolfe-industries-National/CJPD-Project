import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Business / Organization Form</h3>
            <form class='DFUniversalForm' onSubmit={onSubmit}>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Owner<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First Name & Last Name" value={owner} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Business<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Random Incorporated ltd." value={name} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="typeOfBusOrg" placeholder="Convenience Store" value={typeOfBusOrg} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Address<br/></div>
                            <input class='DFUniversalFields' type="text" name="address" placeholder="123 Random Place Blvd. W, Lethbridge AB" value={address} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Alarm Company<br/></div>
                            <input class='DFUniversalFields' type="text" name="alarmCompany" placeholder="Telus Security" value={alarmCompany} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business / Organization Telephone Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="telephoneNumber" placeholder="(000) 000-0000" value={telephoneNumber} onChange={onChange}/>
                        </label>
                    </div>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default MDBusOrg;