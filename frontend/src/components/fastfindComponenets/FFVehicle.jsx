import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchVehicle, getAllVehicles, reset} from "../../features/vehicle/vehicleSlice";

const FFVehicle = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {vehicles} = useSelector((state) => state.vehicle);
    let vehicleList = [];

    useEffect(() => {
        dispatch(getAllVehicles());
    }, [dispatch]);
    vehicleList = vehicles;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(reset());
            dispatch(searchVehicle({query: e.target.value}));
            console.log(vehicles);
        }else{
            dispatch(getAllVehicles());
        }
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Vehicle</h3>
                <button className="DFBottomBarButton2" to={`/detailedFind/vehicle`}>Switch to Detailed Find</button>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Vehicle"/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Owner<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Make<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Model<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Year<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Colour<br/></div>
                    </div>
                </div>
                {
                    vehicleList.map((item) => <div className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/vehicle/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.makeOfVehicle}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.modelOfVehicle}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.yearOfVehicle}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.colourOfVehicle}<br/></div>
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
                    <button className="DFBottomBarButton2" to={`/detailedFind/vehicle`}>Switch to Detailed Find</button>
                </div>
            </div>
        </div>
    )
}

export default FFVehicle