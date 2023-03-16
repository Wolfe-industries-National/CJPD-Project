import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFVehicle = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Detailed Find Vehicle</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Owner<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First & Last Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Make<br/></div>
                            <input class='DFUniversalFields' type="text" name="makeOfVehicle" placeholder="Honda"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="modelOfVehicle" placeholder="Civic"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Year<br/></div>
                            <input class='DFUniversalFields' type="number" name="yearOfVehicle" placeholder="2018"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="colourOfVehicle" placeholder="Silver"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Identification Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="vinOfVehicle" placeholder="4Y1SL65848Z411439"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>License Plate Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="plateOfVehicle" placeholder="AAA-0000"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFVehicle;