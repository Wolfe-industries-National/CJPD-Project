import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPerson} from "../../features/person/personSlice";

const QRPerson = ({id}) => {

    console.log(id);
    const dispatch = useDispatch();
    const {person} = useSelector((state) => state.person);
    let showPerson = {}

    useEffect(() => {
        dispatch(getPerson(id));
    }, [dispatch, id]);
    showPerson = person;

    console.log(showPerson);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Name:</div>
                    <div class="QRResultText" name="name">Billy Bob</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Aliases:</div>
                    <div class="QRResultText" name="aliases">Backyard Butcher</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Sex:</div>
                    <div class="QRResultText" name="sex">Male</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Ethnicity:</div>
                    <div class="QRResultText" name="ethnicity">Caucasian</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Age:</div>
                    <div class="QRResultText" name="age">43</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Height:</div>
                    <div class="QRResultText" name="height">190 cm</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Weight:</div>
                    <div class="QRResultText" name="weight">210 lbs</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Birthday:</div>
                    <div class="QRResultText" name="dateOfBirth">1998/01/03</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Hair Colour:</div>
                    <div class="QRResultText" name="hairColour">Dark Brown</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Eye Colour:</div>
                    <div class="QRResultText" name="eyeColour">Blue</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Fingerprint Section:</div>
                    <div class="QRResultText" name="fps">A999999</div>
                </div>
                <div className="QRData">
                    <div className="QRTitle">Occurrence Number:</div>
                    <div className="QRResultText" name="occurrenceNumber">123456789</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Tattoos:</div>
                    <div class="QRResultText" name="tattoos">Dragon on Neck</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Associates:</div>
                    <div class="QRResultText" name="associates">John Wick</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Flags:</div>
                    <div class="QRResultText" name="flags">Violent Tendencies</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Phone Number:</div>
                    <div class="QRResultText" name="telephone">(403) 123-4567</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Address:</div>
                    <div class="QRResultText" name="address">Randomplace Blvd W, Lethbridge AB, Canada, T1K 6K1</div>
                </div>
            </div>

        </div>
    )
}

export default QRPerson;