import React from 'react';

const FamilyViolenceInvestigationReport = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Family Violence Investigation Report</h3>
            <form class='DFUniversalForm'>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>Instructions: Obtain information within first 12 hours of investigation form CPIC, Complainant, Witness, etc. Use the “Officer’s Notes” for preparing police report. *** INFORMATION REQUIRED FOR BAIL HEARING</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Agency:<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/><br/><br/>
                            <div class='DFUniversalInnerTitle'>File Number:<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <h3 class='DFUniversalTitle2'>Suspect History</h3>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>1. Suspect’s Criminal Violence History:</b><br/>
                            Does the suspect have a history of investigations, charges or convictions for violence and/or sex assaults?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes" class="UniversalRadioFix" type="radio" name="RC-FVIR1" value="yes"/>
                                    <label for="FVIRRadioYes" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo" class="UniversalRadioFix" type="radio" name="RC-FVIR1" value="no"/>
                                    <label for="FVIRRadioNo" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>2. Previous Domestic Violence History:</b><br/>
                            Is there a history of violence or abusive behaviour in the relationship or with a previous intimate partner?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes2" class="UniversalRadioFix" type="radio" name="RC-FVIR2" value="yes"/>
                                    <label for="FVIRRadioYes2" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo2" class="UniversalRadioFix" type="radio" name="RC-FVIR2" value="no"/>
                                    <label for="FVIRRadioNo2" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>3. Complainant’s Proscription of Personal Safety:</b><br/>
                            Does the complainant believe the suspect will disobey terms of released from custody?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes3" class="UniversalRadioFix" type="radio" name="RC-FVIR3" value="yes"/>
                                    <label for="FVIRRadioYes3" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo3" class="UniversalRadioFix" type="radio" name="RC-FVIR3" value="no"/>
                                    <label for="FVIRRadioNo3" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>4. Complainant’s Perception of Future Violence:</b><br/>
                            Does the complainant fear further violence if the suspect should be released from custody?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes4" class="UniversalRadioFix" type="radio" name="RC-FVIR4" value="yes"/>
                                    <label for="FVIRRadioYes4" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo4" class="UniversalRadioFix" type="radio" name="RC-FVIR4" value="no"/>
                                    <label for="FVIRRadioNo4" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>5. Alcohol Usage:</b><br/>
                            Does the suspect have a history of drug or alcohol abuse
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes5" class="UniversalRadioFix" type="radio" name="RC-FVIR5" value="yes"/>
                                    <label for="FVIRRadioYes5" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo5" class="UniversalRadioFix" type="radio" name="RC-FVIR5" value="no"/>
                                    <label for="FVIRRadioNo5" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>6. Mental Illness:</b><br/>
                            Does the suspect have a history of mental illness (eg. depression or paranoia)?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes6" class="UniversalRadioFix" type="radio" name="RC-FVIR6" value="yes"/>
                                    <label for="FVIRRadioYes6" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo6" class="UniversalRadioFix" type="radio" name="RC-FVIR6" value="no"/>
                                    <label for="FVIRRadioNo6" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>7. Suicidal ideation:</b><br/>
                            Has the suspect threatened or attempted suicide?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes7" class="UniversalRadioFix" type="radio" name="RC-FVIR7" value="yes"/>
                                    <label for="FVIRRadioYes7" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo7" class="UniversalRadioFix" type="radio" name="RC-FVIR7" value="no"/>
                                    <label for="FVIRRadioNo7" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>8. Current status of relationship:</b><br/>
                            Is there past, current or pending separation in the relationship?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes8" class="UniversalRadioFix" type="radio" name="RC-FVIR8" value="yes"/>
                                    <label for="FVIRRadioYes8" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo8" class="UniversalRadioFix" type="radio" name="RC-FVIR8" value="no"/>
                                    <label for="FVIRRadioNo8" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>9. Escalation in Abuse:</b><br/>
                            Is there escalation in the frequency/intensity of violence or abuse towards the complainant, family members, a pet or another person?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes9" class="UniversalRadioFix" type="radio" name="RC-FVIR9" value="yes"/>
                                    <label for="FVIRRadioYes9" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo9" class="UniversalRadioFix" type="radio" name="RC-FVIR9" value="no"/>
                                    <label for="FVIRRadioNo9" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>10. Children Exposed</b><br/>
                            Are there children under 18 in the home at any time?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes10" class="UniversalRadioFix" type="radio" name="RC-FVIR10" value="yes"/>
                                    <label for="FVIRRadioYes10" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo10" class="UniversalRadioFix" type="radio" name="RC-FVIR10" value="no"/>
                                    <label for="FVIRRadioNo10" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>11. Threats</b><br/>
                            Has the suspect ever threatened to kill or harm the complainant, a family member, another person, children or a pet?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes11" class="UniversalRadioFix" type="radio" name="RC-FVIR11" value="yes"/>
                                    <label for="FVIRRadioYes11" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo11" class="UniversalRadioFix" type="radio" name="RC-FVIR11" value="no"/>
                                    <label for="FVIRRadioNo11" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>12. Firearms</b><br/>
                            Does the suspect have access to firearms?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes12" class="UniversalRadioFix" type="radio" name="RC-FVIR12" value="yes"/>
                                    <label for="FVIRRadioYes12" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo12" class="UniversalRadioFix" type="radio" name="RC-FVIR12" value="no"/>
                                    <label for="FVIRRadioNo12" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>13. Use of Firearms and Other Weapons:</b><br/>
                            Has the suspect used or threatened threatened to use a firearm, other other weapon (e.g. knife) or thing, that can be used to cause death or injury (e.g. baseball bat) against against the complaint, family member, children or an animal?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes13" class="UniversalRadioFix" type="radio" name="RC-FVIR13" value="yes"/>
                                    <label for="FVIRRadioYes13" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo13" class="UniversalRadioFix" type="radio" name="RC-FVIR13" value="no"/>
                                    <label for="FVIRRadioNo13" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>14. Court Orders:</b><br/>
                            Has the suspect ever violated violated court order?order
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes14" class="UniversalRadioFix" type="radio" name="RC-FVIR14" value="yes"/>
                                    <label for="FVIRRadioYes14" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo14" class="UniversalRadioFix" type="radio" name="RC-FVIR14" value="no"/>
                                    <label for="FVIRRadioNo14" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>15. Employment instability:</b><br/>
                            Has the suspect ever violated a court order?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes15" class="UniversalRadioFix" type="radio" name="RC-FVIR15" value="yes"/>
                                    <label for="FVIRRadioYes15" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo15" class="UniversalRadioFix" type="radio" name="RC-FVIR15" value="no"/>
                                    <label for="FVIRRadioNo15" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>16. Forced Sex</b><br/>
                            Has the suspect ever forced sex on the complainant?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes16" class="UniversalRadioFix" type="radio" name="RC-FVIR16" value="yes"/>
                                    <label for="FVIRRadioYes16" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo16" class="UniversalRadioFix" type="radio" name="RC-FVIR16" value="no"/>
                                    <label for="FVIRRadioNo16" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>17. Strangling, Choking or Biting:</b><br/>
                            Has the suspect ever strangled, choked or bit the complainant?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes17" class="UniversalRadioFix" type="radio" name="RC-FVIR17" value="yes"/>
                                    <label for="FVIRRadioYes17" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo17" class="UniversalRadioFix" type="radio" name="RC-FVIR17" value="no"/>
                                    <label for="FVIRRadioNo17" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>18. Stalking:</b><br/>
                            Has the suspect displayed jealous behaviour, stalking or harassed the complainant or previous intimate partner?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes18" class="UniversalRadioFix" type="radio" name="RC-FVIR18" value="yes"/>
                                    <label for="FVIRRadioYes18" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo18" class="UniversalRadioFix" type="radio" name="RC-FVIR18" value="no"/>
                                    <label for="FVIRRadioNo18" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <b>19. Other information:</b><br/>
                            Any other relevant, information (eg. is the complainant socially/ physically isolated; unwilling to leave the home: cultural barriers inhibit complainant etc ...?
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioYes19" class="UniversalRadioFix" type="radio" name="RC-FVIR19" value="yes"/>
                                    <label for="FVIRRadioYes19" class="RadioLabel">Yes</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="FVIRRadioNo19" class="UniversalRadioFix" type="radio" name="RC-FVIR19" value="no"/>
                                    <label for="FVIRRadioNo19" class="RadioLabel">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>IF: SAFETY OF COMPLAINANT AND/OR CHILDREN IS A CONCERN, ALSO CONSIDER AN “EMERGENCY PROTECTION ORDER” PROVIDED FOR IN THE PROTECTION AGAINST FAMILY VIOLENCE ACT.</div>
                        </label>
                    </div>
                </div>
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

export default FamilyViolenceInvestigationReport