import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createOccurrence} from "../../features/occurrence/occurrenceSlice";


const MDOccurrence = () => {

    const [formData, setFormData] = useState({
        fileNumber: '',
        summary: '',
        person: '',
        busOrg: '',
        property: '',
        vehicle: '',
        telephone: '',
        officerUnit: '',
        address: ''
    })
    const [successMessage, setSuccessMessage] = useState('');

    const {fileNumber, summary, person, busOrg, property, vehicle, telephone, officerUnit, address} = formData;

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createOccurrence(formData));
        setSuccessMessage(`Successfuly created Occurrence`);
        setFormData({
            fileNumber: '',
            summary: '',
            person: '',
            busOrg: '',
            property: '',
            vehicle: '',
            telephone: '',
            officerUnit: '',
            address: ''
        })
        console.log(formData);
    }

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Occurence Form</h3>
            <form class='DFUniversalForm' onSubmit={onSubmit}>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="number" name="fileNumber" placeholder="12345678" value={fileNumber} onChange={onChange}/>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Summary<br/></div>
                            <textarea class='UniversalFieldsTB' name="summary" value={summary} onChange={onChange}></textarea>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Person<br/></div>
                            <input class='DFUniversalFields' type="text" name="person" placeholder="First Name & Last Name" value={fileNumber} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business / Organization<br/></div>
                            <input class='DFUniversalFields' type="text" name="busOrg" placeholder="Random Incorporated ltd." value={busOrg} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Property<br/></div>
                            <input class='DFUniversalFields' type="text" name="property" placeholder="House, Apartment, Hotel, Etc." value={property} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle<br/></div>
                            <input class='DFUniversalFields' type="text" name="vehicle" placeholder="2018 Honda Civic LX" value={vehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Telephone<br/></div>
                            <input class='DFUniversalFields' type="number" name="telephone" placeholder="(000) 000-0000" value={telephone} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer / Unit<br/></div>
                            <input class='DFUniversalFields' type="number" name="officerUnit" placeholder="1234567" value={officerUnit} onChange={onChange}/>
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
                <button>Create</button>
            </form>
        </div>
    )
}

export default MDOccurrence;