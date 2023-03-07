import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FFOccurrence = () => {

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Occurence</h3>
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
            </div>
        </div>
    )
}

export default FFOccurrence