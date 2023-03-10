import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const MDVehicle = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Vehicle Form</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Owner<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First Name & Last Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Make<br/></div>
                            <input class='DFUniversalFields' type="text" name="makeOfVehicle" placeholder="Honda"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="modelOfVehicle" placeholder="Civic"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Year<br/></div>
                            <input class='DFUniversalFields' type="number" name="yearOfVehicle" placeholder="2018"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="colourOfVehicle" placeholder="Silver"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Identification Number (VIN)<br/></div>
                            <input class='DFUniversalFields' type="text" name="vinOfVehicle" placeholder="4Y1SL65848Z411439"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle License Plate Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="plateOfVehicle" placeholder="4AA0-00"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default MDVehicle;