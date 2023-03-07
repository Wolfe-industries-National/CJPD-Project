import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FFOfficerUnit = () => {

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Officer / Unit</h3>
            <label>
                <input class='DFUniversalFields' type="text" name="" placeholder="Name"/>
            </label>
            <div class='FFResultsContainer'>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Name<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Regiment Number<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Rank<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Unit<br/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FFOfficerUnit