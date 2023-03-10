import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const MDTelephone = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Telephone Form</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Owner<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="First Name & Last Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Telephone Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Honda"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Telephone Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Civic"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default MDTelephone;