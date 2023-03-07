import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFAddress = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Detailed Find Address</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Owner / Tenant<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First Name & Last Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Type of Building<br/></div>
                            <input class='DFUniversalFields' type="text" name="typeOfBuilding" placeholder="House, Apartment, Hotel, Etc."/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vacant<br/></div>
                            <select class='DFUniversalFields' name="vacant">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Country<br/></div>
                            <input class='DFUniversalFields' type="number" name="country" placeholder="Canada"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Province<br/></div>
                            <input class='DFUniversalFields' type="text" name="province" placeholder="Alberta"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>City<br/></div>
                            <input class='DFUniversalFields' type="text" name="city" placeholder="Lethbridge"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Address<br/></div>
                            <input class='DFUniversalFields' type="text" name="address" placeholder="123 Random Place Blvd. W"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFAddress;