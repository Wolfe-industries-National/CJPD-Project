import React, {useState} from "react";
import {useDispatch} from "react-redux";
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
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Property</h3>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="typeOfProperty" placeholder="Necklace, Car, Etc." value={typeOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner<br/></div>
                            <input className="DFUniversalFields" type="text" name="owner" placeholder="First Name & Last Name" value={owner} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Serial Number / Vehicle Identification Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="vinOfProperty" placeholder="1234567" value={vinOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Value<br/></div>
                            <input className="DFUniversalFields" type="number" name="valueOfProperty" placeholder="$000" value={valueOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Description<br/></div>
                            <textarea className="UniversalFieldsTB" name="name" value={descriptionOfProperty} onChange={onChange}></textarea>
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

export default MDProperty;