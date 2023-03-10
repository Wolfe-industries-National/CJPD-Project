import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const FISRequest = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Forensic Identification Services Request</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Request Date (yyyy-mm-dd)<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Time (hh:mm)<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number (Required)<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Cost Center (K9999)<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator (Required)<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Detachment / Police Service (Required)<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Type of Offence</h3>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Break and Enter<br/></div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Theft<br/></div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Assault<br/></div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Specify:</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Type of Assistance Required</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Exam</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Plated Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Make / Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Do plates belong to vehicle?<br/></div>
                            Yes<input class='DFUniversalFields' type="radio" name="platesradio" value="Yes"/>
                            No<input class='DFUniversalFields' type="radio" name="platesradio" value="No"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location of Vehicle Exam<br/></div>
                            Detachment<input class='DFUniversalFields' type="radio" name="vehiclelocation" value="Detachment"/>
                            Tow Compound<input class='DFUniversalFields' type="radio" name="vehiclelocation" value="TowCompound"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Towing Company Name<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Phone Number<br/></div>
                            <input class='DFUniversalFields' type="number" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Exhibit Exam</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                            <div class='DFUniversalInnerTitle'>Can exhibits be destroyed after examination?</div>
                            Yes<input class='DFUniversalFields' type="radio" name="exhibitChoice" value="Yes"/>
                            No<input class='DFUniversalFields' type="radio" name="exhibitChoice" value="No"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalInnerTitle'>Where are the exhibits stored?</div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>FIS Locker</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>

                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Exhibit Temporary Locker Number</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Specify:</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Scene Exam</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                            <div class='DFUniversalInnerTitle'>Location that FIS is to attend</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Availability</div>
                            <div class=''>Note: Please do not commit FIS to attend at a set time as we may not be able to respond during the desired window due to other outstanding crime scenes in the district</div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Anytime</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Before</div>
                            <div class='inlineFlex'>
                                <input class='DFUniversalFields' type="checkbox" name="name"/>
                                <input class='DFUniversalFields' type="text" name="name"/>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>After</div>
                            <div class='inlineFlex'>
                                <input class='DFUniversalFields' type="checkbox" name="name"/>
                                <input class='DFUniversalFields' type="text" name="name"/>
                            </div>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Type of Offence</h3>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Fingerprint</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Footwear</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Tire Track</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Physical Match</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>DNA Swab</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other</div>
                            <input class='DFUniversalFields' type="checkbox" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Specify:</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Victim / Complainant Information</h3>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Given Name<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Home Phone Number<br/></div>
                            <input class='DFUniversalFields' type="number" name="name" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other Phone<br/></div>
                            <input class='DFUniversalFields' type="number" name="name" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Suspect Information</h3>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Given Name<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="date" name="name" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>FPS Number (If known)<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Other Relevant Information</h3>
                <div>Describe other relevant information</div>
                <textarea class='UniversalFieldsTB' name="name"></textarea>
            </form>
        </div>
    )
}

export default FISRequest