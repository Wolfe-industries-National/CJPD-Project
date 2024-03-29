import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchOfficerUnit, getAllOfficerUnits, reset} from "../../features/officerUnit/officerUnitSlice";
import { Link } from "react-router-dom";

const FFOfficerUnit = () => {

    const dispatch = useDispatch();
    const {officerUnits} = useSelector((state) => state.officerUnit);
    let officerUnitList = [];

    useEffect(() => {
        dispatch(getAllOfficerUnits());
    }, [dispatch]);
    officerUnitList = officerUnits;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(reset());
            dispatch(searchOfficerUnit({query: e.target.value}));
            console.log(officerUnits);
        }else{
            dispatch(getAllOfficerUnits());
        }
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Officer Unit </h3>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Officer Unit" onChange={onChange}/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Name<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Regiment Number<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Rank<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Unit<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">DBID<br/></div>
                    </div>
                </div>
                {
                    officerUnitList.map((item, index) => <div className="DFUniversalRow" style={{ backgroundColor: index%2===0 && 'lightblue' }}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.name ? item.name : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.regimentalNumber ? item.regimentalNumber : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.rank ? item.rank : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.unit ? item.unit : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.officerDBID ? item.officerDBID : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FFOfficerUnit