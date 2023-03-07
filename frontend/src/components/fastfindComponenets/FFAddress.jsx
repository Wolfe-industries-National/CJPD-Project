import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FFAddress = () => {

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Address</h3>
            <label>
                <input class='DFUniversalFields' type="text" name="" placeholder="Address"/>
            </label>
            <div class='FFResultsContainer'>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Owner / Tenant<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Address<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Country<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>City<br/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FFAddress