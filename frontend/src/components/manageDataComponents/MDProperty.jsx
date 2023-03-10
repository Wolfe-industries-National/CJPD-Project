import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const MDProperty = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Property Form</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Property Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="typeOfProperty" placeholder="Necklace, Car, Etc."/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Property Owner<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First Name & Last Name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Serial Number / Vehicle Identification Number (VIN)<br/></div>
                            <input class='DFUniversalFields' type="number" name="vinOfProperty" placeholder="1234567"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Property Value<br/></div>
                            <input class='DFUniversalFields' type="number" name="valueOfProperty" placeholder="$000"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Description<br/></div>
                            <textarea class='UniversalFieldsTB' name="name"></textarea>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default MDProperty;