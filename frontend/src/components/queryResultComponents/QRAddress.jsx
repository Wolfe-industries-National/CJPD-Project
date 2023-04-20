import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAddress} from "../../features/address/addressSlice";

const QRAddress = ({id}) => {

    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        owner: '',
        typeOfBuilding: '',
        vacant: false,
        country: '',
        province: '',
        city: '',
        formaddress: ''
    })

    const {owner, typeOfBuilding, vacant, country, province, city, formaddress} = formData;

    console.log(id);
    const dispatch = useDispatch();
    const {address} = useSelector((state) => state.address);
    let showAddress = {}

    useEffect(() => {
        setFormData({
            owner: showAddress.owner,
            typeOfBuilding: showAddress.typeOfBuilding,
            vacant: showAddress.vacant,
            country: showAddress.country,
            province: showAddress.province,
            city: showAddress.city,
            formaddress: showAddress.address
        });
    }, [showAddress.owner, showAddress.typeOfBuilding, showAddress.vacant, showAddress.country, showAddress.province, showAddress.city, showAddress.address]);

    useEffect(() => {
        dispatch(getAddress(id));
    }, [dispatch, id]);
    showAddress = address;

    console.log(showAddress);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    {edit ? <input type="text" name="owner" value={owner} placeholder="First & Last Name"/> : <div class="QRResultText" name="owner">{showAddress.owner}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Building Type:</div>
                    {edit ? <input type="text" name="typeOfBuilding" value={typeOfBuilding} placeholder="House, Apartment, Hotel, Etc."/> : <div class="QRResultText" name="typeOfBuilding">{showAddress.typeOfBuilding}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Vacant:</div>
                    {edit ? <div>
                                <div>
                                    {
                                        vacant ? <input id="MDRadioYes" type="radio" name="vacant" value={true} checked /> : <input id="MDRadioYes" type="radio" name="vacant" value={true} />
                                    }
                                    <label for="MDRadioYes">Yes</label>
                                </div>
                                <div>
                                    {vacant ? <input id="MDRadioNo" type="radio" name="vacant" value={false}/> : <input id="MDRadioNo" type="radio" name="vacant" value={false} checked/>}
                                    <label for="MDRadioNo">No</label>
                                </div>
                            </div> : <div class="QRResultText" name="vacant">{showAddress.vacant ? 'Yes' : 'No'}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Country:</div>
                    {edit ? <input type="text" name="country" value={country} placeholder="Canada"/> : <div class="QRResultText" name="country">{showAddress.country}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Province:</div>
                    {edit ? <input type="text" name="province" value={province} placeholder="Alberta"/> : <div class="QRResultText" name="province">{showAddress.province}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">City:</div>
                    {edit ? <input type="text" name="city" value={city} placeholder="Lethbridge"/> : <div class="QRResultText" name="city">{showAddress.city}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Address:</div>
                    {edit ? <input type="text" name="address" value={formaddress} placeholder="123 Random Place Blvd. W" /> : <div class="QRResultText" name="address">{showAddress.address}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">DBID:</div>
                    <div class="QRResultText" name="address">{showAddress.addressDBID}</div>
                </div>
                <div className="QRData">
                    <div className="QRTitle">Occurrence Number:</div>
                    <div className="QRResultText" name="occurrenceNumber">{`${showAddress.occurrences}`}</div>
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

export default QRAddress;