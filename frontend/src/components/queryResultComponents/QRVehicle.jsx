import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getVehicle} from "../../features/vehicle/vehicleSlice";

const QRVehicle = ({id}) => {

    console.log(id);
    const dispatch = useDispatch();
    const {vehicle} = useSelector((state) => state.vehicle);
    let showVehicle = {}

    useEffect(() => {
        dispatch(getVehicle(id));
    }, [dispatch, id]);
    showVehicle = vehicle;

    console.log(showVehicle);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    <div class="QRResultText" name="owner">{showVehicle.owner}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Make:</div>
                    <div class="QRResultText" name="makeOfVehicle">{showVehicle.makeOfVehicle}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Model:</div>
                    <div class="QRResultText" name="modelOfVehicle">{showVehicle.modelOfVehicle}</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Year:</div>
                    <div class="QRResultText" name="modelOfVehicle">{showVehicle.yearOfVehicle}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Colour:</div>
                    <div class="QRResultText" name="colourOfVehicle">{showVehicle.colourOfVehicle}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Vehicle Identification Number:</div>
                    <div class="QRResultText" name="vinOfVehicle">{showVehicle.vinOfVehicle}</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Plate:</div>
                    <div class="QRResultText" name="plateOfVehicle">{showVehicle.plateOfVehicle}</div>
                </div>
            </div>

        </div>
    )
}

export default QRVehicle;