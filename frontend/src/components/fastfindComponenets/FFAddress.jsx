import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchAddress, getAllAddresses, reset} from "../../features/address/addressSlice";

const FFAddress = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {addresses} = useSelector((state) => state.address);
    let addressList = [];

    useEffect(() => {
        dispatch(getAllAddresses());
    }, [dispatch]);
    addressList = addresses;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(reset());
            dispatch(searchAddress({query: e.target.value}));
            console.log(addresses);
        }else{
            dispatch(getAllAddresses());
        }
    }

    return (
        <div className="FFUniversalContainer">
            <h3 className="FFUniversalTitle">Fast Find Address</h3>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Address" onChange={onChange}/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Owner / Tenant<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Address<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Country<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">City<br/></div>
                    </div>
                </div>
                {
                    addressList.map((item) => <div className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/address/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.address}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.country}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.city}<br/></div>
                        </div>
                    </div>)
                }
            </div>
            <div className="DFBottomBar">
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1">Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1">Find Now</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton2" to={`/detailedFind/address`}>Switch to Detailed Find</button>
                </div>
            </div>
        </div>
    )
}

export default FFAddress;