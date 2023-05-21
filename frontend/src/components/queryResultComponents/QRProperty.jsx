import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getProperty, deleteProperty, updateProperty} from "../../features/property/propertySlice";

const QRProperty = ({id}) => {

    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        propertyID: '',
        owner: '',
        typeOfProperty: '',
        vinOfProperty: '',
        valueOfProperty: '',
        descriptionOfProperty: '',
    })

    const {owner, typeOfProperty, vinOfProperty, valueOfProperty, descriptionOfProperty} = formData;

    console.log(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {property} = useSelector((state) => state.property);
    const {user} = useSelector((state) => state.auth);
    let showProperty = {};

    useEffect(() => {
        setFormData({
            propertyID: id,
            owner: property?.owner,
            typeOfProperty: property?.typeOfProperty,
            vinOfProperty: property?.vinOfProperty,
            valueOfProperty: property?.valueOfProperty,
            descriptionOfProperty: property?.descriptionOfProperty,
        });
    }, [property?.owner, property?.typeOfProperty, property?.vinOfProperty, property?.valueOfProperty, property?.descriptionOfProperty]);

    useEffect(() => {
        dispatch(getProperty(id));
    }, [dispatch, id]);
    showProperty = property;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    console.log(showProperty);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Property Type:</div>
                    {edit ? <input type="text" name="typeOfProperty" placeholder="Necklace, Car, Etc." value={typeOfProperty} onChange={onChange}/> : <div class="QRResultText" name="typeOfProperty">{showProperty.typeOfProperty}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    {edit ? <input type="text" name="owner" placeholder="First Name & Last Name" value={owner} onChange={onChange}/> : <div class="QRResultText" name="owner">{showProperty.owner}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Serial Number / Vehicle Identification Number:</div>
                    {edit ? <input type="text" name="vinOfProperty" placeholder="1234567" value={vinOfProperty} onChange={onChange}/> : <div class="QRResultText" name="vinOfProperty">{showProperty.vinOfProperty}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Value:</div>
                    {edit ? <div><span>$</span><input type="number" name="valueOfProperty" placeholder="$000" value={valueOfProperty} onChange={onChange}/></div> : <div class="QRResultText" name="valueOfProperty">${showProperty.valueOfProperty}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Description:</div>
                    {edit ? <textarea className="" name="descriptionOfProperty" value={descriptionOfProperty} onChange={onChange}></textarea> : <div class="QRResultText" name="descriptionOfProperty">{showProperty.descriptionOfProperty}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">DBID:</div>
                    <div class="QRResultText" name="address">{showProperty.propertyDBID}</div>
                </div>
                <div className="QRData">
                    <div className="QRTitle">Occurrence Number:</div>
                    <div className="QRResultText" name="occurrenceNumber">{`${showProperty.occurrences}`}</div>
                </div>
            </div>

            {user.userType !== 'Student' && 
                <>
                    {edit ?
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => {dispatch(updateProperty(formData)); setEdit(false); window.location.reload(false);}}>Save Changes</button>
                            <button className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(false)}>Cancel Changes</button>
                        </div>
                    : 
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(true)}>Edit</button>
                            <button onClick={() => {dispatch(deleteProperty({propertyId: id})); navigate('/')}} className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}}>Delete</button>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default QRProperty;