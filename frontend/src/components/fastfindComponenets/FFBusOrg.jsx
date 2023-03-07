import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FFBusOrg = () => {

    return (
        <div class='FFUniversalContainer'>
            <h3 class='FFUniversalTitle'>Fast Find Business / Organization</h3>
            <label>
                <input class='DFUniversalFields' type="text" name="" placeholder="Business / Organization Name"/>
            </label>
            <div class='FFResultsContainer'>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Owner Name<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Business Name<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Type<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Address<br/></div>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='FFUniversalInnerTitle'>Telephone<br/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FFBusOrg