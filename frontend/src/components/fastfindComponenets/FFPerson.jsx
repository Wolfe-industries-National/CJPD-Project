import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FFPerson = () => {

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Person</h3>
            <label>
                <input class='DFUniversalFields' type="text" name="" placeholder="Name"/>
            </label>
            <div class='FFResultsContainer'>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Name<br/></div>
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
            </div>
        </div>
    )
}

export default FFPerson