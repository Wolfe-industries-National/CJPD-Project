import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getOccurrence, deleteOccurrence, updateOccurrence} from "../../features/occurrence/occurrenceSlice";

const QROccurrence = ({id}) => {

    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        occurrenceID: '',
        fileNumber: '',
        summary: '',
        person: '',
        busOrg: '',
        property: '',
        vehicle: '',
        telephone: '',
        officerUnit: '',
        address: ''
    });
    const {fileNumber, summary, person, busOrg, property, vehicle, telephone, officerUnit, address} = formData;

    console.log(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {occurrence} = useSelector((state) => state.occurrence);
    const {user} = useSelector((state) => state.auth);
    let showOccurrence = {}

    useEffect(() => {
        setFormData({
            occurrenceID: id,
            fileNumber: occurrence?.fileNumber,
            summary: occurrence?.summary,
            person: occurrence?.person,
            busOrg: occurrence?.busOrg,
            property: occurrence?.property,
            vehicle: occurrence?.vehicle,
            telephone: occurrence?.telephone,
            officerUnit: occurrence?.officerUnit,
            address: occurrence?.address
        });
    }, [occurrence?.fileNumber, occurrence?.summary, occurrence?.person, occurrence?.busOrg, occurrence?.property, occurrence?.vehicle, occurrence?.telephone, occurrence?.officerUnit, occurrence?.address]);

    useEffect(() => {
        dispatch(getOccurrence(id));
    }, [dispatch, id]);
    showOccurrence = occurrence;

    console.log(showOccurrence);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div class="QRCContainer" >

            {
                showOccurrence && (
                    <div>
                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">File Number:</div>
                                {edit ? <input type="number" name="fileNumber" placeholder="12345678" value={fileNumber} onChange={onChange} /> :<div class="QRResultText" name="fileNumber">{showOccurrence.fileNumber}</div>}
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Summary:</div>
                                {edit ? <input type="text" name="summary" placeholder="Summary Description" value={summary} onChange={onChange} /> : <div class="QRResultText" name="summary">{showOccurrence.summary}</div>}
                            </div>
                        </div>

                        {
                            user.userType !== 'Student' && (
                                <div>
                                    <div class="QRRow">
                                        <div class="QRData">
                                            <div class="QRTitle">Person:</div>
                                            {edit ? <input type="text" name="person" placeholder="Person" value={person} onChange={onChange} /> : <div class="QRResultText" name="person">{showOccurrence.person}</div>}
                                        </div>
                                        <div class="QRData">
                                            <div class="QRTitle">Business / Organization:</div>
                                            {edit ? <input type="text" name="busOrg" placeholder="Random Incorporated ltd." value={busOrg} onChange={onChange} /> : <div class="QRResultText" name="busOrg">{showOccurrence.busOrg && showOccurrence.busOrg[0]}</div>}
                                        </div>
                                        <div class="QRData">
                                            <div class="QRTitle">Property:</div>
                                            {edit ? <input type="text" name="property" placeholder="Property Type" value={property} onChange={onChange} /> : <div class="QRResultText" name="property">{showOccurrence.property && showOccurrence.property[0]}</div>}                                            
                                        </div>
                                    </div>

                                    <div class="QRRow">
                                        <div class="QRData">
                                            <div class="QRTitle">Vehicle:</div>
                                            {edit ? <input type="text" name="vehicle" placeholder="2018 Honda Civic LX" value={vehicle} onChange={onChange} /> : <div class="QRResultText" name="vehicle">{showOccurrence.vehicle && showOccurrence.vehicle[0]}</div>}
                                        </div>
                                        <div class="QRData">
                                            <div class="QRTitle">Telephone:</div>
                                            {edit ? <input type="text" name="telephone" placeholder="111-111-1111" value={telephone} onChange={onChange} /> : <div class="QRResultText" name="telephone">{showOccurrence.telephone && showOccurrence.telephone[0]}</div>}
                                        </div>
                                        <div class="QRData">
                                            <div class="QRTitle">Officer Regiment:</div>
                                            {edit ? <input type="text" name="officerUnit" placeholder="99" value={officerUnit} onChange={onChange} /> : <div class="QRResultText" name="officerUnit">{showOccurrence.officerUnit && showOccurrence.officerUnit[0]}</div>}
                                        </div>
                                    </div>

                                    <div class="QRRow" >
                                        <div class="QRData">
                                            <div class="QRTitle">Address:</div>
                                            {edit ? <input type="text" name="address" placeholder="123 Random Place W." value={address} onChange={onChange} /> : <div class="QRResultText" name="address">{showOccurrence.address && showOccurrence.address[0]}</div>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }

            {user.userType !== 'Student' && 
                <div style={{height: '4rem'}}>
                    {edit ?
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => {dispatch(updateOccurrence(formData)); setEdit(false); window.location.reload(false);}}>Save Changes</button>
                            <button className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(false)}>Cancel Changes</button>
                        </div>
                    : 
                        <div style={{position: 'absolute', right: '5rem', display: 'flex', gap: '1.5rem'}}>
                            <button className="editBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}} onClick={() => setEdit(true)}>Edit</button>
                            <button onClick={() => {dispatch(deleteOccurrence({occurrenceId: id})); navigate('/')}} className="deleteBtn" style={{border: 'none', paddingLeft: '2rem', paddingRight: '2rem', cursor: 'pointer'}}>Delete</button>
                        </div>
                    }
                </div>
            }

        </div>
    )
}

export default QROccurrence;