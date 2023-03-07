import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFPerson = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Detailed Find Person</h3>
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
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="date" name="dateOfBirth"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Telephone<br/></div>
                            <input class='DFUniversalFields' type="number" name="telephone" placeholder="(000) 000-0000"/>
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
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Finger Print Section<br/></div>
                            <input class='DFUniversalFields' type="text" name="fps" placeholder="A000000"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Height (cm)<br/></div>
                            <input class='DFUniversalFields' type="text" name="height" placeholder="000 cm"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Weight (lbs)<br/></div>
                            <input class='DFUniversalFields' type="text" name="weight" placeholder="000 lbs."/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Aliases<br/></div>
                            <input class='DFUniversalFields' type="text" name="aliases" placeholder="One Eyed Willy"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Associated Vehicles<br/></div>
                            <input class='DFUniversalFields' type="text" name="associatedVehicles" placeholder="2018 Honda Civic LX"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'td>
                        <label>
                            <div class='DFUniversalInnerTitle'>Associates<br/></div>
                            <input class='DFUniversalFields' type="text" name="associates" placeholder="Bill Benson"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Flags<br/></div>
                            <input class='DFUniversalFields' type="text" name="flags" placeholder="Violent Tendencies, HPV Positive, etc."/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Tattoos / Distinguishing Feature(s)<br/></div>
                            <input class='DFUniversalFields' type="text" name="tattoos" placeholder="Scar on left cheek"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Hair Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="hairColour" placeholder="Black"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Eye Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="eyeColour" placeholder="Blue"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFPerson;