import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getBusOrg, deleteBusOrg, updateBusOrg} from "../../features/busOrg/busOrgSlice";

const QRBusOrg = ({id}) => {

    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        busOrgID: '',
        owner: '',
        name: '',
        typeOfBusOrg: '',
        address: '',
        alarmCompany: '',
        telephoneNumber: ''
    });

    const {owner, name, typeOfBusOrg, address, alarmCompany, telephoneNumber} = formData;

    console.log(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {busOrg} = useSelector((state) => state.busOrg);
    const {user} = useSelector((state) => state.auth);
    let showBusOrg = {}

    useEffect(() => {
        setFormData({
            busOrgID: id,
            owner: busOrg?.owner,
            name: busOrg?.name,
            typeOfBusOrg: busOrg?.typeOfBusOrg,
            address: busOrg?.address,
            alarmCompany: busOrg?.alarmCompany,
            telephoneNumber: busOrg?.telephoneNumber
        });
    }, [busOrg?.owner, busOrg?.name, busOrg?.typeOfBusOrg, busOrg?.address, busOrg?.alarmCompany, busOrg?.telephoneNumber]);

    useEffect(() => {
        dispatch(getBusOrg(id));
    }, [dispatch, id]);
    showBusOrg = busOrg;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    console.log(showBusOrg);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    {edit ? <input type="text" name="owner" placeholder="First & Last Name" value={owner} onChange={onChange}/> : <div class="QRResultText" name="owner">{showBusOrg.owner}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Business:</div>
                    {edit ? <input type="text" name="name" placeholder="Random Incorporated ltd." value={name} onChange={onChange}/> : <div class="QRResultText" name="name">{showBusOrg.name}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Business Type:</div>
                    {edit ? <input type="text" name="typeOfBusOrg" placeholder="Convenience Store" value={typeOfBusOrg} onChange={onChange}/> : <div class="QRResultText" name="typeOfBusOrg">{showBusOrg.typeOfBusOrg}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Address:</div>
                    {edit ? <input type="text" name="address" placeholder="123 Random Place Blvd. W, Lethbridge AB" value={address} onChange={onChange}/> : <div class="QRResultText" name="address">{showBusOrg.address}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Telephone:</div>
                    {edit ? <input type="text" name="telephoneNumber" placeholder="(000) 000-0000" value={telephoneNumber} onChange={onChange}/> : <div class="QRResultText" name="alarmCompany">{showBusOrg.telephoneNumber}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Alarm Company:</div>
                    {edit ? <input type="text" name="alarmCompany" placeholder="Telus Security"  value={alarmCompany} onChange={onChange}/> : <div class="QRResultText" name="telephoneNumber">{showBusOrg.alarmCompany}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">DBID:</div>
                    <div class="QRResultText" name="address">{showBusOrg.busOrgDBID}</div>
                </div>
                <div className="QRData">
                    <div className="QRTitle">Occurrence Number:</div>
                    <div className="QRResultText" name="occurrenceNumber">{`${showBusOrg.occurrences}`}</div>
                </div>
            </div>

            {user.userType !== 'Student' && 
                <>
                    {edit ?
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => {dispatch(updateBusOrg(formData)); setEdit(false); window.location.reload(false);}}>Save Changes</button>
                            <button className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(false)}>Cancel Changes</button>
                        </div>
                    : 
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(true)}>Edit</button>
                            <button onClick={() => {dispatch(deleteBusOrg({busOrgId: id})); navigate('/')}} className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}}>Delete</button>
                        </div>
                    }
                </>
            }

        </div>
    )
}

export default QRBusOrg;