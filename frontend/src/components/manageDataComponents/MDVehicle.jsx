import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createVehicle} from "../../features/vehicle/vehicleSlice";


const MDVehicle = () => {

    const [formData, setFormData] = useState({
        owner: '',
        makeOfVehicle: '',
        modelOfVehicle: false,
        yearOfVehicle: '',
        colourOfVehicle: '',
        vinOfVehicle: '',
        plateOfVehicle: ''
    })
    const [successMessage, setSuccessMessage] = useState('');

    const {owner, makeOfVehicle, modelOfVehicle, yearOfVehicle, colourOfVehicle, vinOfVehicle, plateOfVehicle} = formData;

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createVehicle(formData));
        setSuccessMessage(`Successfuly created vehicle`);
        setFormData({
            owner: '',
            makeOfVehicle: '',
            modelOfVehicle: false,
            yearOfVehicle: '',
            colourOfVehicle: '',
            vinOfVehicle: '',
            plateOfVehicle: ''
        })
        console.log(formData);
    }

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Vehicle Form</h3>
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
                            <div class='DFUniversalInnerTitle'>Vehicle Make<br/></div>
                            <input class='DFUniversalFields' type="text" name="makeOfVehicle" placeholder="Honda" value={makeOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="modelOfVehicle" placeholder="Civic" value={modelOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Year<br/></div>
                            <input class='DFUniversalFields' type="number" name="yearOfVehicle" placeholder="2018" value={yearOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="colourOfVehicle" placeholder="Silver" value={colourOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Identification Number (VIN)<br/></div>
                            <input class='DFUniversalFields' type="text" name="vinOfVehicle" placeholder="4Y1SL65848Z411439" value={vinOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle License Plate Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="plateOfVehicle" placeholder="4AA0-00" value={plateOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default MDVehicle;