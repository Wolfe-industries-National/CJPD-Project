import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOccurrence} from "../../features/occurrence/occurrenceSlice";

const QROccurrence = ({id}) => {

    console.log(id);
    const dispatch = useDispatch();
    const {occurrence} = useSelector((state) => state.occurrence);
    let showOccurrence = {}

    useEffect(() => {
        dispatch(getOccurrence(id));
    }, [dispatch, id]);
    showOccurrence = occurrence;

    console.log(showOccurrence);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">File Number:</div>
                    <div class="QRResultText" name="fileNumber">1234567</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Summary:</div>
                    <div class="QRResultText" name="summary">Lorem Ipsum</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Person:</div>
                    <div class="QRResultText" name="person">John Doe</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Business / Organization:</div>
                    <div class="QRResultText" name="busOrg">None</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Property:</div>
                    <div class="QRResultText" name="property">Necklace</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Vehicle:</div>
                    <div class="QRResultText" name="vehicle">Honda Civic</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Telephone:</div>
                    <div class="QRResultText" name="telephone">(403) 123-4567</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Officer Regiment:</div>
                    <div class="QRResultText" name="officerUnit">12345</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Address:</div>
                    <div class="QRResultText" name="address">123 Randomplace Blvd. W</div>
                </div>
            </div>

        </div>
    )
}

export default QROccurrence;