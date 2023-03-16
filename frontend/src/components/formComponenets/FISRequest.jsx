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
                            <input class='DFUniversalFields' type="date" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Time (hh:mm)<br/></div>
                            <input class='DFUniversalFields' type="time" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder='Required'/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Cost Center (K9999)<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder='Required'/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Detachment / Police Service<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder='Required'/>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Type of Offence</h3><br/>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Break and Enter<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Theft<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Assault<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Other</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS1"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>

                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Specify: (If other was selected)</div>
                            <input class='DFUniversalFields' type="text" name="OtherSpecify1"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Type of Assistance</div>
                            <input class='DFUniversalFields' type="text" name="" placeholder='Required'/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Vehicle Exam</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS2"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Plated Number<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Make / Model<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Do Plates Belong to Vehicle?<br/></div>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FISRadioYes" class="UniversalRadioFix" type="radio" name="RC-FIS1" value="yes"/>
                                    <label for="FISRadioYes">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FISRadioNo" class="UniversalRadioFix" type="radio" name="RC-FIS1" value="no"/>
                                    <label for="FISRadioNo">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Location of Vehicle Exam<br/></div>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FISRadioDetachment" class="UniversalRadioFix" type="radio" name="RC-FIS2" value="detachment"/>
                                    <label for="FISRadioDetachment">Detachment</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FISRadioTC" class="UniversalRadioFix" type="radio" name="RC-FIS2" value="towcompound"/>
                                    <label for="FISRadioTC">Tow Compound</label>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Towing Company Name<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Phone Number<br/></div>
                            <input class='DFUniversalFields' type="number" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Exhibit Exam</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS3"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Can exhibits be destroyed after examination?<br/></div>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FISRadioYes2" class="UniversalRadioFix" type="radio" name="RC-FIS2" value="yes"/>
                                    <label for="FISRadioYes2">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FISRadioNo2" class="UniversalRadioFix" type="radio" name="RC-FIS2" value="no"/>
                                    <label for="FISRadioNo2">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalInnerTitle'>Where are the exhibits stored?</div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>FIS Locker</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS4"/>
                        </label>
                    </div>

                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Exhibit Temporary Locker Number</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS4"/>
                        </label>
                    </div>

                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Other</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS4"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Specify:</div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Scene Exam</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS5"/>
                            <div class='DFUniversalInnerTitle'>Location that FIS is to attend</div>
                            <input class='DFUniversalFields' type="text" name=""/>
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
                            <div class='CheckboxInnerTitle'>Anytime</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS6"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Before</div>
                            <div class='inlineFlex'>
                                <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS6"/>
                                <input class='DFUniversalFields' type="text" name=""/>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>After</div>
                            <div class='inlineFlex'>
                                <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS6"/>
                                <input class='DFUniversalFields' type="text" name=""/>
                            </div>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Type of Exams Required</h3><br/>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Fingerprint</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS7"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Footwear</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS7"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Tire Track</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS7"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Physical Match</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS7"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>DNA Swab</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS7"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Other</div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-FIS7"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Specify:</div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Victim / Complainant Information</h3><br/>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Given Name<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Home Phone Number<br/></div>
                            <input class='DFUniversalFields' type="number" name="" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other Phone<br/></div>
                            <input class='DFUniversalFields' type="number" name="ame" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Suspect Information</h3><br/>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Given Name<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>FPS Number (If known)<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <h3 class='DFUniversalTitle2'>Other Relevant Information</h3><br/>
                <div>Describe other relevant information</div>
                <textarea class='UniversalFieldsTB' name=""></textarea>
            </form>

            <div className='DFBottomBar'>
                <div className='DFBottomBarInnerContainer'>
                    <button className='DFBottomBarButton1'>Clear All</button>
                </div>
                <div className='DFBottomBarInnerContainer'>
                    <button className='DFBottomBarButton1'>Save Form</button>
                </div>
                <div className='DFBottomBarInnerContainer'>
                    <button className='DFBottomBarButton2'>Download Form</button>
                </div>
            </div>
        </div>
    )
}

export default FISRequest