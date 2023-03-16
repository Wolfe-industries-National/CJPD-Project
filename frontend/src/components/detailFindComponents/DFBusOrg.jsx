import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFBusOrg = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Detailed Find Business / Organization</h3>
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
                            <div class='DFUniversalInnerTitle'>Business<br/></div>
                            <input class='DFUniversalFields' type="text" name="Bus/name" placeholder="Random Incorporated ltd."/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="typeOfBusOrg" placeholder="Convenience Store"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Address<br/></div>
                            <input class='DFUniversalFields' type="text" name="address" placeholder="123 Random Place Blvd. W, Lethbridge AB"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Alarm Company<br/></div>
                            <input class='DFUniversalFields' type="text" name="alarmCompany" placeholder="Telus Security"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Telephone<br/></div>
                            <input class='DFUniversalFields' type="number" name="telephoneNumber" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFBusOrg;