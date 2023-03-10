import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchAddress, reset} from "../../features/address/addressSlice";

const FFAddress = () => {

    // const dispatch = useDispatch();
    // const {addresses} = useSelector((state) => state.address);

    const onChange = (e) => {
        // console.log(e.target.value);
        // dispatch(reset());
        // dispatch(searchAddress({query: e.target.value}));
        // console.log(addresses);
    }

  return (
    <div className='FFUniversalContainer'>
        <h3 className='FFUniversalTitle'>Fast Find Address</h3>
        <label>
            <input className='DFUniversalFields' type="text" name="" placeholder="Address" onChange={onChange}/>
        </label>
        <div className='FFResultsContainer'>
            <div className='DFUniversalRow'>
                <div className='DFUniversalData'>
                    <div className='FFUniversalInnerTitle'>Owner / Tenant<br/></div>
                </div>
                <div className='DFUniversalData'>
                    <div className='FFUniversalInnerTitle'>Address<br/></div>
                </div>
                <div className='DFUniversalData'>
                    <div className='FFUniversalInnerTitle'>Country<br/></div>
                </div>
                <div className='DFUniversalData'>
                    <div className='FFUniversalInnerTitle'>City<br/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FFAddress;