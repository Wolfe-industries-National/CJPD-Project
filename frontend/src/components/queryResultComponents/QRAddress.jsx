import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {getAddress, reset} from "../../features/address/addressSlice";

const QRAddress = ({id}) => {

    console.log(id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {address} = useSelector((state) => state.address);
    let showAddress = {}

    useEffect(() => {
        dispatch(getAddress(id));
    }, [dispatch, id]);
    showAddress = address;

    console.log(showAddress);

    return (
        <div class="QRCContainer">

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Owner:</div>
                    <div class="QRResultText" name="owner">{showAddress.owner}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Building Type:</div>
                    <div class="QRResultText" name="typeOfBuilding">{showAddress.typeOfBuilding}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Vacant:</div>
                    <div class="QRResultText" name="vacant">{showAddress.vacant}</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Country:</div>
                    <div class="QRResultText" name="country">{showAddress.country}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">Province:</div>
                    <div class="QRResultText" name="province">{showAddress.province}</div>
                </div>
                <div class="QRData">
                    <div class="QRTitle">City:</div>
                    <div class="QRResultText" name="city">{showAddress.city}</div>
                </div>
            </div>

            <div class="QRRow">
                <div class="QRData">
                    <div class="QRTitle">Address:</div>
                    <div class="QRResultText" name="address">{showAddress.address}</div>
                </div>
            </div>

        </div>
    )
}

export default QRAddress;