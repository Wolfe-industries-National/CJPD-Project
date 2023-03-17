import React, {useState} from "react";
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
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Occurrence</h3>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">File Number<br/></div>
                            <input className="DFUniversalFields" type="number" name="fileNumber" placeholder="12345678" value={fileNumber} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Summary<br/></div>
                            <textarea className="UniversalFieldsTB" name="summary" value={summary} onChange={onChange}></textarea>
                        </label>
                    </div>
                </div>


                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Person<br/></div>
                            <input className="DFUniversalFields" type="text" name="person" placeholder="First & Last Name" value={fileNumber} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Business / Organization<br/></div>
                            <input className="DFUniversalFields" type="text" name="busOrg" placeholder="Random Incorporated ltd." value={busOrg} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Property<br/></div>
                            <input className="DFUniversalFields" type="text" name="property" placeholder="House, Apartment, Hotel, Etc." value={property} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Vehicle<br/></div>
                            <input className="DFUniversalFields" type="text" name="vehicle" placeholder="2018 Honda Civic LX" value={vehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="number" name="telephone" placeholder="(000) 000-0000" value={telephone} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Officer / Unit<br/></div>
                            <input className="DFUniversalFields" type="number" name="officerUnit" placeholder="1234567" value={officerUnit} onChange={onChange}/>
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

export default MDOccurrence;