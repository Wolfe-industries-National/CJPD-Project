import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {detailSearchVehicle} from "../../features/vehicle/vehicleSlice";
import { Link } from "react-router-dom";

const DFVehicle = () => {

    const [searchData, setSearchData] = useState({
        owner: '',
        makeOfVehicle: '',
        modelOfVehicle: '',
        yearOfVehicle: '',
        colourOfVehicle: '',
        vinOfVehicle: '',
        plateOfVehicle: '',
    });

    const {owner, makeOfVehicle, modelOfVehicle, yearOfVehicle, colourOfVehicle, vinOfVehicle, plateOfVehicle} = searchData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {vehicles} = useSelector((state) => state.vehicle);
    let vehicleList = [];

    const onChange = (e) => {
        setSearchData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(detailSearchVehicle(searchData));
        vehicleList = vehicles;
        console.log(vehicleList);
    }

    const clearFields = () => {
        setSearchData({
            owner: '',
            makeOfVehicle: '',
            modelOfVehicle: '',
            yearOfVehicle: '',
            colourOfVehicle: '',
            vinOfVehicle: '',
            plateOfVehicle: '',
        })
    }

    return (
        <div className="DFUniversalContainer">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                <h3 className="DFUniversalTitle" style={{marginBottom: 0}}>Detailed Find Vehicle</h3>
                <div className="DFBottomBarInnerContainer">
                    <Link className="DFBottomBarButton2" to='/fastFind/vehicle'>Switch to Fast Find</Link>
                </div>
            </div>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner<br/></div>
                            <input className="DFUniversalFields" type="text" name="owner" placeholder="First & Last Name" value={owner} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Make<br/></div>
                            <input className="DFUniversalFields" type="text" name="makeOfVehicle" placeholder="Honda" value={makeOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Model<br/></div>
                            <input className="DFUniversalFields" type="text" name="modelOfVehicle" placeholder="Civic" value={modelOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Year<br/></div>
                            <input className="DFUniversalFields" type="number" name="yearOfVehicle" placeholder="2018" value={yearOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="colourOfVehicle" placeholder="Silver" value={colourOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Vehicle Identification Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="vinOfVehicle" placeholder="4Y1SL65848Z411439" value={vinOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">License Plate Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="plateOfVehicle" placeholder="AAA-0000" value={plateOfVehicle} onChange={onChange}/>
                        </label>
                    </div>
                </div>
            </form>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={clearFields}>Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={onSubmit}>Find Now</button>
                </div>
            </div>
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
                    vehicles.map((item) => <div className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/vehicle/${item._id}`)}>
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
        </div>
    )
}

export default DFVehicle;