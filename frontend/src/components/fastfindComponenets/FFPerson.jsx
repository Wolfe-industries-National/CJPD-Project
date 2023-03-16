import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {searchPerson} from '../../features/person/personSlice';

const FFPerson = () => {

    const [formData, setFormData] = useState({
        query: ''
    });

    const {people} = useSelector((state) => state.person);
    const dispatch = useDispatch();

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Person</h3>
            <label>
                <input class='DFUniversalFields' type="text" name="" placeholder="Person"/>
            </label>
            <div class='FFResultsContainer'>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Person<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Date of Birth<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Age<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Fingerprint Section<br/></div>
                    </div>
                </div>
                <div className='DFBottomBar' style={{position: 'absolute', bottom: '50px', right: '50px'}}>
                    <div className='DFBottomBarInnerContainer'>
                        <button className='DFBottomBarButton1'>Clear All</button>
                    </div>
                    <div className='DFBottomBarInnerContainer'>
                        <button className='DFBottomBarButton1'>Find Now</button>
                    </div>
                    <div className='DFBottomBarInnerContainer'>
                        <Link className='DFBottomBarButton2' style={{padding: '1rem', margin: '0'}} to={`/detailedFind/person`}>Switch to Detailed Find</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FFPerson