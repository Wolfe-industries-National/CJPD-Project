import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchProperty, getAllProperties, reset} from "../../features/property/propertySlice";

const FFProperty = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {properties} = useSelector((state) => state.property);
    let propertyList = [];

    useEffect(() => {
        dispatch(getAllProperties());
    }, [dispatch]);
    propertyList = properties;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(reset());
            dispatch(searchProperty({query: e.target.value}));
            console.log(properties);
        }else{
            dispatch(getAllProperties());
        }
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Property</h3>
                <button className="DFBottomBarButton2" to={`/detailedFind/property`}>Switch to Detailed Find</button>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Person"/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Type<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Owner<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Serial Number / Vehicle Identification Number<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Value<br/></div>
                    </div>
                </div>
                {
                    propertyList.map((item) => <div className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/property/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.typeOfProperty}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.vinOfProperty}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.valueOfProperty}<br/></div>
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
                    <button className="DFBottomBarButton2" to={`/detailedFind/property`}>Switch to Detailed Find</button>
                </div>
            </div>
        </div>
    )
}

export default FFProperty