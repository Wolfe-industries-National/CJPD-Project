import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPerson} from "../../features/person/personSlice";

const QRPerson = ({id}) => {

    console.log(id);
    const dispatch = useDispatch();
    const {person} = useSelector((state) => state.person);
    let showPerson = {}
    const currentYear = new Date().getFullYear();

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
                                <div class="QRResultText" name="name">{showPerson?.name}</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Aliases:</div>
                                <div class="QRResultText" name="aliases">{showPerson.aliases && showPerson.aliases[0]}</div>
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Age:</div>
                                <div class="QRResultText" name="age">{showPerson.dateOfBirth && (currentYear - showPerson.dateOfBirth.split('-')[0])}</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Height:</div>
                                <div class="QRResultText" name="height">{showPerson.height} cm</div>
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Weight:</div>
                                <div class="QRResultText" name="weight">{showPerson.weight} lbs</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Birthday:</div>
                                <div class="QRResultText" name="dateOfBirth">{showPerson.dateOfBirth && showPerson.dateOfBirth.split('T')[0]}</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Hair Colour:</div>
                                <div class="QRResultText" name="hairColour">{showPerson.hairColour}</div>
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Eye Colour:</div>
                                <div class="QRResultText" name="eyeColour">{showPerson.eyeColour}</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Fingerprint Section:</div>
                                <div class="QRResultText" name="fps">{showPerson.fps}</div>
                            </div>
                            <div className="QRData">
                                <div className="QRTitle">Occurrence Number:</div>
                                <div className="QRResultText" name="occurrenceNumber">{`${showPerson.occurrences}`}</div>
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Tattoos:</div>
                                <div class="QRResultText" name="tattoos">{showPerson.tattoos && showPerson.tattoos[0]}</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Associates:</div>
                                <div class="QRResultText" name="associates">{showPerson.associates && showPerson.associates[0]}</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Flags:</div>
                                <div class="QRResultText" name="flags">{showPerson.associatedVehicles && showPerson.associatedVehicles[0]}</div>
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Phone Number:</div>
                                <div class="QRResultText" name="telephone">{showPerson.telephone}</div>
                            </div>
                            <div class="QRData">
                                <div class="QRTitle">Address:</div>
                                <div class="QRResultText" name="address">{showPerson.address}</div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default QRPerson;