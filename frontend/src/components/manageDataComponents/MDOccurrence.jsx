import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const MDOccurrence = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Occurence Form</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="number" name="fileNumber" placeholder="12345678"/>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Summary<br/></div>
                            <textarea class='UniversalFieldsTB' name="name"></textarea>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Person<br/></div>
                            <input class='DFUniversalFields' type="text" name="person" placeholder="First Name & Last Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business / Organization<br/></div>
                            <input class='DFUniversalFields' type="text" name="busOrg" placeholder="Random Incorporated ltd."/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Property<br/></div>
                            <input class='DFUniversalFields' type="text" name="property" placeholder="House, Apartment, Hotel, Etc."/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle<br/></div>
                            <input class='DFUniversalFields' type="text" name="vehicle" placeholder="2018 Honda Civic LX"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Telephone<br/></div>
                            <input class='DFUniversalFields' type="number" name="telephone" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer / Unit<br/></div>
                            <input class='DFUniversalFields' type="number" name="officerUnit" placeholder="1234567"/>
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

            </form>
        </div>
    )
}

export default MDOccurrence;