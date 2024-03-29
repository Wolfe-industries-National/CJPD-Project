import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchVehicle, getAllVehicles, resetVehicles} from "../../features/vehicle/vehicleSlice";
import { Link } from "react-router-dom";

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
            dispatch(resetVehicles());
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
                <Link className="DFBottomBarButton2" to='/detailedFind/vehicle'>Switch to Detailed Find</Link>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Vehicle" onChange={onChange}/>
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
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">DBID<br/></div>
                    </div>
                </div>
                {
                    vehicleList.map((item, index) => <div className="DFUniversalRow" style={{ backgroundColor: index%2===0 && 'lightblue' }} onClick={() => navigate(`/queryResultPage/vehicle/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner ? item.owner : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.makeOfVehicle ? item.makeOfVehicle : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.modelOfVehicle ? item.modelOfVehicle : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.yearOfVehicle ? item.yearOfVehicle : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.colourOfVehicle ? item.colourOfVehicle : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.vehicleDBID ? item.vehicleDBID : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FFVehicle