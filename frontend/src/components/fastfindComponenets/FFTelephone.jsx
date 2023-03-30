import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchTelephone, getAllTelephones, resetTelephone} from "../../features/telephone/telephoneSlice";
import { Link } from "react-router-dom";

const FFTelephone = () => {

    const dispatch = useDispatch();
    const {telephones} = useSelector((state) => state.telephone);
    let telephoneList = [];

    useEffect(() => {
        dispatch(getAllTelephones());
    }, [dispatch]);
    telephoneList = telephones;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(resetTelephone());
            dispatch(searchTelephone({query: e.target.value}));
            console.log(telephones);
        }else{
            dispatch(getAllTelephones());
        }
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Telephone</h3>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Telephone" onChange={onChange}/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Telephone<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Owner<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Type<br/></div>
                    </div>
                </div>
                {
                    telephoneList.map((item) => <div className="DFUniversalRow">
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.telephoneNumber}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.typeOfTelephone}<br/></div>
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
                    <button className="DFBottomBarButton2" to={`/detailedFind/telephone`}>Switch to Detailed Find</button>
                </div>
            </div>
        </div>
    )
}

export default FFTelephone