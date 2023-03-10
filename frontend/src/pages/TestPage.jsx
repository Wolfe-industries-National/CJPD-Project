import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { searchAddress } from '../features/address/addressSlice';
import { searchBusOrg } from '../features/busOrg/busOrgSlice';

const TestPage = () => {

    const [searchQuery, setSearchQuery] = useState({
        query: ''
    })
    const dispatch = useDispatch();
    const {busOrgs} = useSelector((state) => state.busOrg);

    const onChange = (e) => {
        console.log(e.target.value);
        setSearchQuery({query: e.target.value});
        dispatch(searchBusOrg(searchQuery));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchAddress(searchQuery));
    }

    return (
        <div>
            <form >
                <input type="text" name="address" id="address" onChange={onChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TestPage;