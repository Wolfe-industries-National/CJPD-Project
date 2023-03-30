import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOccurrence} from "../../features/occurrence/occurrenceSlice";

const QROccurrence = ({id}) => {

    console.log(id);
    const dispatch = useDispatch();
    const {occurrence} = useSelector((state) => state.occurrence);
    const {user} = useSelector((state) => state.auth);
    let showOccurrence = {}

    useEffect(() => {
        dispatch(getOccurrence(id));
    }, [dispatch, id]);
    showOccurrence = occurrence;

    console.log(showOccurrence);

    return (
        <div class="QRCContainer">

            {
                showOccurrence && (
                    <div>
                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">File Number:</div>
                                <div class="QRResultText" name="fileNumber">{showOccurrence.fileNumber}</div>
                            </div>
                        </div>

                        <div class="QRRow">
                            <div class="QRData">
                                <div class="QRTitle">Summary:</div>
                                <div class="QRResultText" name="summary">{showOccurrence.summary}</div>
                            </div>
                        </div>

                        {
                            user.userType === "Admin" && (
                                <div>
                                    <div class="QRRow">
                                        <div class="QRData">
                                            <div class="QRTitle">Person:</div>
                                            <div class="QRResultText" name="person">{showOccurrence.person}</div>
                                        </div>
                                        <div class="QRData">
                                            <div class="QRTitle">Business / Organization:</div>
                                            <div class="QRResultText" name="busOrg">{showOccurrence.busOrg && showOccurrence.busOrg[0]}</div>
                                        </div>
                                        <div class="QRData">
                                            <div class="QRTitle">Property:</div>
                                            <div class="QRResultText" name="property">{showOccurrence.property && showOccurrence.property[0]}</div>
                                        </div>
                                    </div>

                                    <div class="QRRow">
                                        <div class="QRData">
                                            <div class="QRTitle">Vehicle:</div>
                                            <div class="QRResultText" name="vehicle">{showOccurrence.vehicle && showOccurrence.vehicle[0]}</div>
                                        </div>
                                        <div class="QRData">
                                            <div class="QRTitle">Telephone:</div>
                                            <div class="QRResultText" name="telephone">{showOccurrence.telephone && showOccurrence.telephone[0]}</div>
                                        </div>
                                        <div class="QRData">
                                            <div class="QRTitle">Officer Regiment:</div>
                                            <div class="QRResultText" name="officerUnit">{showOccurrence.officerUnit && showOccurrence.officerUnit[0]}</div>
                                        </div>
                                    </div>

                                    <div class="QRRow">
                                        <div class="QRData">
                                            <div class="QRTitle">Address:</div>
                                            <div class="QRResultText" name="address">{showOccurrence.address && showOccurrence.address[0]}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}

export default QROccurrence;