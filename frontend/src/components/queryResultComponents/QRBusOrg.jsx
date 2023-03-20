import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBusOrg} from "../../features/busOrg/busOrgSlice";

const QRBusOrg = ({id}) => {

    console.log(id);
    const dispatch = useDispatch();
    const {busOrg} = useSelector((state) => state.busOrg);
    let showBusOrg = {}

    useEffect(() => {
        dispatch(getBusOrg(id));
    }, [dispatch, id]);
    showBusOrg = busOrg;

    console.log(showBusOrg);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    <div class="QRResultText" name="owner">{showBusOrg.owner}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Business:</div>
                    <div class="QRResultText" name="name">{showBusOrg.name}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Business Type:</div>
                    <div class="QRResultText" name="typeOfBusOrg">{showBusOrg.typeOfBusOrg}</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Address:</div>
                    <div class="QRResultText" name="address">{showBusOrg.address}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Telephone:</div>
                    <div class="QRResultText" name="alarmCompany">{showBusOrg.telephoneNumber}</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Alarm Company:</div>
                    <div class="QRResultText" name="telephoneNumber">{showBusOrg.alarmCompany}</div>
                </div>
            </div>

        </div>
    )
}

export default QRBusOrg;