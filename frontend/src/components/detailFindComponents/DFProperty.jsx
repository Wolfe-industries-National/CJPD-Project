import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFProperty = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Detailed Find Property</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="typeOfProperty" placeholder="Necklace, Car, Etc."/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Owner<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First & Last Name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Serial Number / Vehicle Identification Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="vinOfProperty" placeholder="1234567"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Value<br/></div>
                            <input class='DFUniversalFields' type="number" name="valueOfProperty" placeholder="$123"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFProperty;