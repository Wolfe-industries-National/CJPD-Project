import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchBusOrg, getAllBusOrg, reset} from "../../features/busOrg/busOrgSlice";
import { Link } from "react-router-dom";

const FFBusOrg = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {busOrgs} = useSelector((state) => state.busOrg);
    let businessList = [];

    useEffect(() => {
        dispatch(getAllBusOrg());
    }, [dispatch]);
    businessList = busOrgs;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(reset());
            dispatch(searchBusOrg({query: e.target.value}));
            console.log(busOrgs);
        }else{
            dispatch(getAllBusOrg());
        }
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Business / Organizations</h3>
                <Link className="DFBottomBarButton2" to='/detailedFind/bus-org'>Switch to Detailed Find</Link>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Business / Organization" onChange={onChange}/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Business<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Owner<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Type<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Address<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Telephone<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">DBID<br/></div>
                    </div>
                </div>
                {
                    businessList.map((item, index) => <div className="DFUniversalRow" style={{ backgroundColor: index%2===0 && 'lightblue' }} onClick={() => navigate(`/queryResultPage/bus-org/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.name ? item.name : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner ? item.owner : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.typeOfBusOrg ? item.typeOfBusOrg : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.address ? item.address : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.telephoneNumber ? item.telephoneNumber : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.busOrgDBID ? item.busOrgDBID : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FFBusOrg