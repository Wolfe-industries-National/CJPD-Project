import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPerson} from "../../features/person/personSlice";

const MDPerson = () => {

    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: Date,
        telephone: '',
        address: '',
        fps: '',
        height: '',
        weight: '',
        aliases: '',
        associatedVehicles: '',
        associates: '',
        flags: '',
        tattoos: '',
        hairColour: '',
        eyeColour: ''
    })
    const [successMessage, setSuccessMessage] = useState('');

    const {name, dateOfBirth, telephone, address, fps, height, weight, aliases, associatedVehicles, associates, flags, tattoos, hairColour, eyeColour} = formData;

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createPerson(formData));
        setSuccessMessage(`Successfuly created Person`);
        setFormData({
            name: '',
            dateOfBirth: '',
            telephone: '',
            address: '',
            fps: '',
            height: '',
            weight: '',
            aliases: '',
            associatedVehicles: '',
            associates: '',
            flags: '',
            tattoos: '',
            hairColour: '',
            eyeColour: ''
        })
        console.log(formData);
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Person</h3>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Name<br/></div>
                            <input className="DFUniversalFields" type="text" name="name" placeholder="First & Last Name" value={name} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Date of Birth<br/></div>
                            <input className="DFUniversalFields" type="date" name="dateOfBirth" value={dateOfBirth} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="number" name="telephone" placeholder="(000) 000-0000" value={telephone} onChange={onChange}/>
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
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Finger Print Section<br/></div>
                            <input className="DFUniversalFields" type="text" name="fps" placeholder="A000000"  value={fps} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Height (cm)<br/></div>
                            <input className="DFUniversalFields" type="number" name="height" placeholder="188 cm" value={height} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Weight (lbs)<br/></div>
                            <input className="DFUniversalFields" type="number" name="weight" placeholder="203 lbs." value={weight} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Aliases<br/></div>
                            <input className="DFUniversalFields" type="text" name="aliases" placeholder="Ice" value={aliases} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Associated Vehicles<br/></div>
                            <input className="DFUniversalFields" type="text" name="associatedVehicles" placeholder="2018 Honda Civic LX" value={associatedVehicles} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData"td>
                        <label>
                            <div className="DFUniversalInnerTitle">Associates<br/></div>
                            <input className="DFUniversalFields" type="text" name="associates" placeholder="Bill Benson" value={associates} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Flags<br/></div>
                            <input className="DFUniversalFields" type="text" name="flags" placeholder="Violent Tendencies, etc." value={flags} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Tattoos / Distinguishing Feature(s)<br/></div>
                            <input className="DFUniversalFields" type="text" name="tattoos" placeholder="Scar on left cheek" value={tattoos} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Hair Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="hairColour" placeholder="Black" value={hairColour} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Eye Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="eyeColour" placeholder="Blue" value={eyeColour} onChange={onChange}/>
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

export default MDPerson;