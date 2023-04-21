import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPerson} from "../../features/person/personSlice";

const QRPerson = ({id}) => {

    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: Date,
        telephone: '',
        address: '',
        fps: '',
        height: '',
        weight: '',
        race: '',
        gender: '',
        aliases: '',
        associatedVehicles: '',
        associates: '',
        flags: '',
        tattoos: '',
        hairColour: '',
        eyeColour: ''
    });
    const {name, dateOfBirth, telephone, address, fps, height, weight, race, gender, aliases, associatedVehicles, associates, flags, tattoos, hairColour, eyeColour} = formData;

    console.log(id);
    const dispatch = useDispatch();
    const {person} = useSelector((state) => state.person);
    const {user} = useSelector((state) => state.auth);
    let showPerson = {}
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        setFormData({
            name: person?.name,
            dateOfBirth: person?.dateOfBirth,
            telephone: person?.telephone,
            address: person?.address,
            fps: person?.fps,
            height: person?.height,
            weight: person?.weight,
            race: person?.race,
            gender: person?.gender,
            aliases: person?.aliases,
            associatedVehicles: person?.associatedVehicles,
            associates: person?.associates,
            flags: person?.flags,
            tattoos: person?.tattoos,
            hairColour: person?.hairColour,
            eyeColour: person?.eyeColour
        });
    }, [person?.name, person?.dateOfBirth, person?.telephone, person?.address, person?.fps, person?.height, person?.weight, person?.race, person?.gender, person?.aliases, person?.associatedVehicles, person?.associates, person?.flags, person?.tattoos, person?.hairColour, person?.eyeColour]);

    useEffect(() => {
        dispatch(getPerson(id));
    }, [dispatch, id]);
    showPerson = person;

    console.log(showPerson);

    return (
        <div class="QRCContainer">

            {
                showPerson && (
                    <div>
                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Name:</div>
                                {edit ? <input type="text" name="name" placeholder="First & Last Name" value={name}/> : <div class="QRResultText" name="name">{showPerson?.name}</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Aliases:</div>
                                {edit ? <input type="text" name="aliases" placeholder="Ice" value={aliases}/> : <div class="QRResultText" name="aliases">{showPerson.aliases && showPerson.aliases[0]}</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Race:</div>
                                {edit ? <input type="text" name="race" placeholder="White" value={race}/> : <div class="QRResultText" name="race">{showPerson.race && showPerson.race}</div>}
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Age:</div>
                                <div class="QRResultText" name="age">{showPerson.dateOfBirth && (currentYear - showPerson.dateOfBirth.split('-')[0])}</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Height:</div>
                                {edit ? <input type="number" name="height" placeholder="188 cm" value={height}/> : <div class="QRResultText" name="height">{showPerson.height} cm</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Gender:</div>
                                {edit ? <input type="text" name="gender" placeholder="Male" value={gender}/> : <div class="QRResultText" name="gender">{showPerson.gender && showPerson.gender}</div>}
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Weight:</div>
                                {edit ? <input type="number" name="weight" placeholder="203 kg." value={weight}/> : <div class="QRResultText" name="weight">{showPerson.weight} lbs</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Birthday:</div>
                                {edit ? <input type="date" name="dateOfBirth" value={dateOfBirth}/> : <div class="QRResultText" name="dateOfBirth">{showPerson.dateOfBirth && showPerson.dateOfBirth.split('T')[0]}</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Hair Colour:</div>
                                {edit ? <input type="text" name="hairColour" placeholder="Black" value={hairColour}/> : <div class="QRResultText" name="hairColour">{showPerson.hairColour}</div>}
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Eye Colour:</div>
                                {edit ? <input type="text" name="eyeColour" placeholder="Blue" value={eyeColour}/> : <div class="QRResultText" name="eyeColour">{showPerson.eyeColour}</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Fingerprint Section:</div>
                                {edit ? <input type="text" name="fps" placeholder="A000000"  value={fps}/> : <div class="QRResultText" name="fps">{showPerson.fps}</div>}
                            </div>
                            <div className="QRData">
                                <div className="QRTitle">Occurrence Number:</div>
                                <div className="QRResultText" name="occurrenceNumber">{`${showPerson.occurrences}`}</div>
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Tattoos:</div>
                                {edit ? <input type="text" name="tattoos" placeholder="Scar on left cheek" value={tattoos} /> : <div class="QRResultText" name="tattoos">{showPerson.tattoos && showPerson.tattoos[0]}</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Associates:</div>
                                {edit ? <input type="text" name="associates" placeholder="Bill Benson" value={associates}/> : <div class="QRResultText" name="associates">{showPerson.associates && showPerson.associates[0]}</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Flags:</div>
                                {edit ? <input type="text" name="flags" placeholder="Violent Tendencies, etc." value={flags} /> : <div class="QRResultText" name="flags">{showPerson.associatedVehicles && showPerson.associatedVehicles[0]}</div>}
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Phone Number:</div>
                                {edit ? <input type="text" name="telephone" placeholder="(000) 000-0000" value={telephone}/> : <div class="QRResultText" name="telephone">{showPerson.telephone}</div>}
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Address:</div>
                                {edit ? <input type="text" name="address" placeholder="123 Random Place Blvd. W, Lethbridge AB" value={address}/> : <div class="QRResultText" name="address">{showPerson.address}</div>}
                            </div>
                        </div>

                        <div class="QRRow" style={{border: 'none'}}>
                        {user.userType !== 'Student' && 
                            <>
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
                            </>
                        }
                        </div>
                        <div class="QRRow" style={{border: 'none'}}/>
                        <div class="QRRow" style={{border: 'none'}}/>

                    </div>
                )
            }

        </div>
    )
}

export default QRPerson;