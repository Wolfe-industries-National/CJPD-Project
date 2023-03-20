import React, {useState} from "react";
import {useDispatch} from "react-redux";
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
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Vehicle Form</h3>
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
                            <div className="DFUniversalInnerTitle">Make<br/></div>
                            <input className="DFUniversalFields" type="text" name="makeOfVehicle" placeholder="Honda" value={makeOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Model<br/></div>
                            <input className="DFUniversalFields" type="text" name="modelOfVehicle" placeholder="Civic" value={modelOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Year<br/></div>
                            <input className="DFUniversalFields" type="number" name="yearOfVehicle" placeholder="2018" value={yearOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="colourOfVehicle" placeholder="Silver" value={colourOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Vehicle Identification Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="vinOfVehicle" placeholder="4Y1SL65848Z411439" value={vinOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">License Plate Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="plateOfVehicle" placeholder="AAA-0000" value={plateOfVehicle} onChange={onChange}/>
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

export default MDVehicle;