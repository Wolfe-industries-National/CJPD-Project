import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FFProperty = () => {

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Property</h3>
            <label>
                <input class='DFUniversalFields' type="text" name="" placeholder="Property Type"/>
            </label>
            <div class='FFResultsContainer'>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Type<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Owner<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Serial Number / Vehicle Identification Number<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Value<br/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FFProperty