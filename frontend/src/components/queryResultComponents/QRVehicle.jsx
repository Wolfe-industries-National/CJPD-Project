import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getVehicle, deleteVehicle, updateVehicle} from "../../features/vehicle/vehicleSlice";

const QRVehicle = ({id}) => {

    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        vehicleID: '',
        owner: '',
        makeOfVehicle: '',
        modelOfVehicle: '',
        yearOfVehicle: '',
        colourOfVehicle: '',
        vinOfVehicle: '',
        plateOfVehicle: ''
    })

    const {owner, makeOfVehicle, modelOfVehicle, yearOfVehicle, colourOfVehicle, vinOfVehicle, plateOfVehicle} = formData;

    console.log(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {vehicle} = useSelector((state) => state.vehicle);
    const {user} = useSelector((state) => state.auth);
    let showVehicle = {}

    useEffect(() => {
        setFormData({
            vehicleID: id,
            owner: vehicle?.owner,
            makeOfVehicle: vehicle?.makeOfVehicle,
            modelOfVehicle: vehicle?.modelOfVehicle,
            yearOfVehicle: vehicle?.yearOfVehicle,
            colourOfVehicle: vehicle?.colourOfVehicle,
            vinOfVehicle: vehicle?.vinOfVehicle,
            plateOfVehicle: vehicle?.plateOfVehicle
        });
    }, [vehicle?.owner, vehicle?.makeOfVehicle, vehicle?.modelOfVehicle, vehicle?.yearOfVehicle, vehicle?.colourOfVehicle, vehicle?.vinOfVehicle, vehicle?.plateOfVehicle]);

    useEffect(() => {
        dispatch(getVehicle(id));
    }, [dispatch, id]);
    showVehicle = vehicle;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    console.log(showVehicle);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    {edit ? <input type="text" name="owner" placeholder="First & Last Name" value={owner} onChange={onChange}/> : <div class="QRResultText" name="owner">{showVehicle.owner}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Make:</div>
                    {edit ? <input type="text" name="makeOfVehicle" placeholder="Honda" value={makeOfVehicle} onChange={onChange}/> : <div class="QRResultText" name="makeOfVehicle">{showVehicle.makeOfVehicle}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Model:</div>
                    {edit ? <input type="text" name="modelOfVehicle" placeholder="Civic" value={modelOfVehicle} onChange={onChange}/> : <div class="QRResultText" name="modelOfVehicle" >{showVehicle.modelOfVehicle}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Year:</div>
                    {edit ? <input type="number" name="yearOfVehicle" placeholder="2018" value={yearOfVehicle} onChange={onChange}/> : <div class="QRResultText" name="modelOfVehicle" >{showVehicle.yearOfVehicle}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Colour:</div>
                    {edit ? <input type="text" name="colourOfVehicle" placeholder="Silver" value={colourOfVehicle} onChange={onChange}/> : <div class="QRResultText" name="colourOfVehicle" >{showVehicle.colourOfVehicle}</div>}
                </div>
                <div class="QRData">
                    <div class="QRTitle">Vehicle Identification Number:</div>
                    {edit ? <input type="text" name="vinOfVehicle" placeholder="4Y1SL65848Z411439" value={vinOfVehicle} onChange={onChange}/> : <div class="QRResultText" name="vinOfVehicle" >{showVehicle.vinOfVehicle}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Plate:</div>
                    {edit ? <input type="text" name="plateOfVehicle" placeholder="AAA-0000" value={plateOfVehicle} onChange={onChange}/> : <div class="QRResultText" name="plateOfVehicle" >{showVehicle.plateOfVehicle}</div>}
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">DBID:</div>
                    <div class="QRResultText" name="address">{showVehicle.vehicleDBID}</div>
                </div>
                <div className="QRData">
                    <div className="QRTitle">Occurrence Number:</div>
                    <div className="QRResultText" name="occurrenceNumber">{`${showVehicle.occurrences}`}</div>
                </div>
            </div>

            {user.userType !== 'Student' && 
                <>
                    {edit ?
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button onClick={() => {dispatch(updateVehicle(formData)); setEdit(false); window.location.reload(false);}} className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}}>Save Changes</button>
                            <button className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(false)}>Cancel Changes</button>
                        </div>
                    : 
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(true)}>Edit</button>
                            <button onClick={() => {dispatch(deleteVehicle({vehicleId: id})); navigate('/')}} className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}}>Delete</button>
                        </div>
                    }
                </>
            }

        </div>
    )
}

export default QRVehicle;