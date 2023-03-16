import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FFOccurrence = () => {

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Occurrence</h3>
            <label>
                <input class='DFUniversalFields' type="text" name="" placeholder="File Number"/>
            </label>
            <div class='FFResultsContainer'>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>File Number<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Description<br/></div>
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
                        <Link className='DFBottomBarButton2' style={{padding: '1rem', margin: '0'}} to={`/detailedFind/occurrence`}>Switch to Detailed Find</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FFOccurrence