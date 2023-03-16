import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createProperty} from "../../features/property/propertySlice";


const MDProperty = () => {

    const [formData, setFormData] = useState({
        owner: '',
        typeOfProperty: '',
        vinOfProperty: false,
        valueOfProperty: '',
        descriptionOfProperty: '',
    })
    const [successMessage, setSuccessMessage] = useState('');

    const {owner, typeOfProperty, vinOfProperty, valueOfProperty, descriptionOfProperty} = formData;

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createProperty(formData));
        setSuccessMessage(`Successfuly created Property`);
        setFormData({
            owner: '',
            typeOfProperty: '',
            vinOfProperty: false,
            valueOfProperty: '',
            descriptionOfProperty: '',
        })
        console.log(formData);
    }

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Property Form</h3>
            <form class='DFUniversalForm' onSubmit={onSubmit}>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Property Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="typeOfProperty" placeholder="Necklace, Car, Etc." value={typeOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Property Owner<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First Name & Last Name" value={owner} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Serial Number / Vehicle Identification Number (VIN)<br/></div>
                            <input class='DFUniversalFields' type="number" name="vinOfProperty" placeholder="1234567" value={vinOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Property Value<br/></div>
                            <input class='DFUniversalFields' type="number" name="valueOfProperty" placeholder="$000" value={valueOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Description<br/></div>
                            <textarea class='UniversalFieldsTB' name="descriptionOfProperty" value={descriptionOfProperty} onChange={onChange}></textarea>
                        </label>
                    </div>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default MDProperty;