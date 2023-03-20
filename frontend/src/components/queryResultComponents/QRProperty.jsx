import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProperty} from "../../features/property/propertySlice";

const QRProperty = ({id}) => {

    console.log(id);
    const dispatch = useDispatch();
    const {property} = useSelector((state) => state.property);
    let showProperty = {}

    useEffect(() => {
        dispatch(getProperty(id));
    }, [dispatch, id]);
    showProperty = property;

    console.log(showProperty);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Property Type:</div>
                    <div class="QRResultText" name="typeOfProperty">{showProperty.typeOfProperty}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    <div class="QRResultText" name="owner">{showProperty.owner}</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Serial Number / Vehicle Identification Number:</div>
                    <div class="QRResultText" name="vinOfProperty">{showProperty.vinOfProperty}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Value:</div>
                    <div class="QRResultText" name="valueOfProperty">${showProperty.valueOfProperty}</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Description:</div>
                    <div class="QRResultText" name="descriptionOfProperty">{showProperty.descriptionOfProperty}</div>
                </div>
            </div>

        </div>
    )
}

export default QRProperty;