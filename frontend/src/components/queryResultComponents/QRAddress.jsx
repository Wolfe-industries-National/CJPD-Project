import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getAddress, deleteAddress, updateAddress} from "../../features/address/addressSlice";

const QRAddress = ({id}) => {

    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        addressID: '',
        owner: '',
        typeOfBuilding: '',
        vacant: false,
        country: '',
        province: '',
        city: '',
        formaddress: ''
    })

    const {owner, typeOfBuilding, vacant, country, province, city, formaddress} = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {address} = useSelector((state) => state.address);
    const {user} = useSelector((state) => state.auth);
    let showAddress = {};

    useEffect(() => {
        dispatch(getAddress(id));
    }, [dispatch, id]);
    showAddress = address;

    useEffect(() => {
        setFormData({
            addressID: id,
            owner: showAddress?.owner,
            typeOfBuilding: showAddress?.typeOfBuilding,
            vacant: showAddress?.vacant,
            country: showAddress?.country,
            province: showAddress?.province,
            city: showAddress?.city,
            formaddress: showAddress?.address
        });
    }, [showAddress?.owner, showAddress?.typeOfBuilding, showAddress?.vacant, showAddress?.country, showAddress?.province, showAddress?.city, showAddress?.address]);


    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    
    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    {edit ? <input type="text" name="owner" value={owner} placeholder="First & Last Name" onChange={onChange}/> : <div class="QRResultText" name="owner">{showAddress.owner}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Building Type:</div>
                    {edit ? <input type="text" name="typeOfBuilding" value={typeOfBuilding} placeholder="House, Apartment, Hotel, Etc." onChange={onChange}/> : <div class="QRResultText" name="typeOfBuilding">{showAddress.typeOfBuilding}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Vacant:</div>
                    {edit ? <div>
                                <div>
                                    {
                                        vacant ? <input id="MDRadioYes" type="radio" name="vacant" value={true} checked onChange={onChange} /> : <input id="MDRadioYes" type="radio" name="vacant" value={true} />
                                    }
                                    <label for="MDRadioYes">Yes</label>
                                </div>
                                <div>
                                    {vacant ? <input id="MDRadioNo" type="radio" name="vacant" value={false} onChange={onChange}/> : <input id="MDRadioNo" type="radio" name="vacant" value={false} checked/>}
                                    <label for="MDRadioNo">No</label>
                                </div>
                            </div> : <div class="QRResultText" name="vacant">{showAddress.vacant ? 'Yes' : 'No'}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Country:</div>
                    {edit ? <input type="text" name="country" value={country} placeholder="Canada" onChange={onChange}/> : <div class="QRResultText" name="country">{showAddress.country}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Province:</div>
                    {edit ? <input type="text" name="province" value={province} placeholder="Alberta" onChange={onChange}/> : <div class="QRResultText" name="province">{showAddress.province}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">City:</div>
                    {edit ? <input type="text" name="city" value={city} placeholder="Lethbridge" onChange={onChange}/> : <div class="QRResultText" name="city">{showAddress.city}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Address:</div>
                    {edit ? <input type="text" name="address" value={formaddress} placeholder="123 Random Place Blvd. W" onChange={onChange} /> : <div class="QRResultText" name="address">{showAddress.address}</div>}
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
            
            {user.userType !== 'Student' && 
                <>
                    {edit ?
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => {
                                Object.defineProperty(formData, "address",
                                    Object.getOwnPropertyDescriptor(formData, "formaddress"));
                                delete formData["formaddress"];
                                dispatch(updateAddress(formData));
                                setEdit(false);
                                window.location.reload(false);
                                }
                            }>Save Changes</button>
                            <button className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(false)}>Cancel Changes</button>
                        </div>
                    : 
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(true)}>Edit</button>
                            <button onClick={() => {dispatch(deleteAddress({addressId: id})); navigate('/')}} className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}}>Delete</button>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default QRAddress;