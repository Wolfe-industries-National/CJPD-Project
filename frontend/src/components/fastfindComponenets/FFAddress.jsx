import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchAddress, getAllAddresses, reset} from "../../features/address/addressSlice";
import { Link } from "react-router-dom";

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
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Address</h3>
                <Link className="DFBottomBarButton2" to='/detailedFind/address'>Switch to Detailed Find</Link>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="address" placeholder="Address" onChange={onChange}/>
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
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">DBID<br/></div>
                    </div>
                </div>
                {
                    addressList.map((item, index) => <div className="DFUniversalRow"  style={{ backgroundColor: index%2===0 && 'lightblue' }} onClick={() => navigate(`/queryResultPage/address/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner ? item.owner : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.address ? item.address : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.country ? item.country : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.city ? item.city : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.addressDBID ? item.addressDBID : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FFAddress;