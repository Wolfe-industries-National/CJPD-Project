import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FFTelephone = () => {

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Telephone</h3>
            <label>
                <input class='DFUniversalFields' type="text" name="" placeholder="Telephone Number"/>
            </label>
            <div class='FFResultsContainer'>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Telephone Number<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Owner<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Type<br/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FFTelephone