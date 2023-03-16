import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
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
    const [successMessage, setSuccessMessage] = useState('');

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
        setSuccessMessage(`Successfuly created ${address}`);
        setFormData({
            owner: '',
            typeOfBuilding: '',
            vacant: false,
            country: '',
            city: '',
            address: ''
        })
        console.log(formData);
    }

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Address Form</h3>
            <form class='DFUniversalForm' onSubmit={onSubmit}>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Owner / Tenant<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First Name & Last Name" onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Type of Building<br/></div>
                            <input class='DFUniversalFields' type="text" name="typeOfBuilding" placeholder="House, Apartment, Hotel, Etc." onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vacant<br/></div>
                            <select class='DFUniversalFields' name="vacant" onChange={onChange}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>

                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Country<br/></div>
                            <input class='DFUniversalFields' type="text" name="country" placeholder="Canada" onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Province<br/></div>
                            <input class='DFUniversalFields' type="text" name="province" placeholder="Alberta" onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>City<br/></div>
                            <input class='DFUniversalFields' type="text" name="city" placeholder="Lethbridge" onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Address<br/></div>
                            <input class='DFUniversalFields' type="text" name="address" placeholder="123 Random Place Blvd. W" onChange={onChange}/>
                        </label>
                    </div>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default MDAddress;