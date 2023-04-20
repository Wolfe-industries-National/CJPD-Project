import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchProperty, getAllProperties, reset} from "../../features/property/propertySlice";
import { Link } from "react-router-dom";

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
                <Link className="DFBottomBarButton2" to='/detailedFind/property'>Switch to Detailed Find</Link>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Property Type" onChange={onChange}/>
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
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">DBID<br/></div>
                    </div>
                </div>
                {
                    propertyList.map((item, index) => <div className="DFUniversalRow" style={{ backgroundColor: index%2===0 && 'lightblue' }} onClick={() => navigate(`/queryResultPage/property/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.typeOfProperty ? item.typeOfProperty : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner ? item.owner : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.vinOfProperty ? item.vinOfProperty : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.valueOfProperty ? item.valueOfProperty : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.propertyDBID ? item.propertyDBID : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FFProperty