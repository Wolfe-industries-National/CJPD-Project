import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchOfficerUnit, getAllOfficerUnits, reset} from "../../features/officerUnit/officerUnitSlice";

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
                <button className="DFBottomBarButton2" to={`/detailedFind/officerUnit`}>Switch to Detailed Find</button>
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
                </div>
                {
                    officerUnitList.map((item) => <div className="DFUniversalRow">
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.name}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.regimentalNumber}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.rank}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.unit}<br/></div>
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
                    <button className="DFBottomBarButton2" to={`/detailedFind/officerUnit`}>Switch to Detailed Find</button>
                </div>
            </div>
        </div>
    )
}

export default FFOfficerUnit