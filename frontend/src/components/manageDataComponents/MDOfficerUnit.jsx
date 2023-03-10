import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const MDOfficerUnit = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Officer / Unit Form</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="First Name & Last Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Regimental Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Honda"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Rank<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Civic"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Civic"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default MDOfficerUnit;