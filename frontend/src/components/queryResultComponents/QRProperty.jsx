import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProperty} from "../../features/property/propertySlice";

const QRProperty = ({id}) => {

    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        owner: '',
        typeOfProperty: '',
        vinOfProperty: '',
        valueOfProperty: '',
        descriptionOfProperty: '',
    })

    const {owner, typeOfProperty, vinOfProperty, valueOfProperty, descriptionOfProperty} = formData;

    console.log(id);
    const dispatch = useDispatch();
    const {property} = useSelector((state) => state.property);
    let showProperty = {};

    useEffect(() => {
        setFormData({
            owner: property.owner,
            typeOfProperty: property.typeOfProperty,
            vinOfProperty: property.vinOfProperty,
            valueOfProperty: property.valueOfProperty,
            descriptionOfProperty: property.descriptionOfProperty,
        });
    }, [property.owner, property.typeOfProperty, property.vinOfProperty, property.valueOfProperty, property.descriptionOfProperty]);

    useEffect(() => {
        dispatch(getProperty(id));
    }, [dispatch, id]);
    showProperty = property;

    console.log(showProperty);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Property Type:</div>
                    {edit ? <input type="text" name="typeOfProperty" placeholder="Necklace, Car, Etc." value={typeOfProperty}/> : <div class="QRResultText" name="typeOfProperty">{showProperty.typeOfProperty}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    {edit ? <input type="text" name="owner" placeholder="First Name & Last Name" value={owner}/> : <div class="QRResultText" name="owner">{showProperty.owner}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Serial Number / Vehicle Identification Number:</div>
                    {edit ? <input type="text" name="vinOfProperty" placeholder="1234567" value={vinOfProperty}/> : <div class="QRResultText" name="vinOfProperty">{showProperty.vinOfProperty}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Value:</div>
                    {edit ? <div><span>$</span><input type="number" name="valueOfProperty" placeholder="$000" value={valueOfProperty}/></div> : <div class="QRResultText" name="valueOfProperty">${showProperty.valueOfProperty}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Description:</div>
                    {edit ? <textarea className="" name="descriptionOfProperty" value={descriptionOfProperty}></textarea> : <div class="QRResultText" name="descriptionOfProperty">{showProperty.descriptionOfProperty}</div>}
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

            {edit ?
                <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                    <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(true)}>Save Changes</button>
                    <button className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(false)}>Cancel Changes</button>
                </div>
            : 
                <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                    <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(true)}>Edit</button>
                    <button className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}}>Delete</button>
                </div>
            }
        </div>
    )
}

export default QRProperty;