import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

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
                            <input class='DFUniversalFields' type="text" name="name"/>
                            <div class='DFUniversalInnerTitle'>File Number:<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
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
                            <div>1. Suspect’s Criminal Violence History:<br/>
                                Does the suspect have a history of investigations, charges or convictions for violence and/or sex assaults?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div> 2. Previous Domestic Violence History:<br/>
                                Is there a history of violence or abusive behaviour in the relationship or with a previous intimate partner?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>3. Complainant’s Proscription of Personal Safety:<br/>
                                Does the complainant believe the suspect will disobey terms of released from custody?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>4. Complainant’s Perception of Future Violence:<br/>
                                Does the complainant fear further violence if the suspect should be released from custody?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>5. Alcohol Usage:<br/>
                                Does the suspect have a history of drug or alcohol abuse</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>6. Mental Illness:<br/>
                                Does the suspect have a history of mental illness (eg. depression or paranoia)?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>7. Suicidal ideation:<br/>
                                Has the suspect threatened or attempted suicide?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>8. Current status of relationship:<br/>
                                Is there past, current or pending separation in the relationship?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>9. Escalation in Abuse:<br/>
                                I                           Is there escalation in the frequency/intensity of violence or abuse towards the complainant, family members, a pet or another person?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>10. Children Exposed<br/>
                                Are there children under 18 in the home at any time?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>11. Threats<br/>
                                Has the suspect ever threatened to kill or harm the complainant, a family member, another person, children or a pet?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>12. Firearms<br/>
                                Does the suspect have access to firearms?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>13. Use of Firearms and Other Weapons:<br/>
                                Has the suspect used or threatened threatened to use a firearm, other other weapon (e.g. knife) or thing, that can be used to cause death or injury (e.g. baseball bat) against against the complaint, family member, children or an animal?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>14. Court Orders:<br/>
                                Has the suspect ever violated violated court order?order</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>15. Employment instability:<br/>
                                Has the suspect ever violated a court order?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>16. Forced Sex<br/>
                                Has the suspect ever forced sex on the complainant?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>17. Strangling, Choking or Biting:<br/>
                                Has the suspect ever strangled, choked or bit the complainant?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>18. Stalking:<br/>
                                Has the suspect displayed jealous behaviour, stalking or harassed the complainant or previous intimate partner?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>19. Other information:<br/>
                                Any other relevant, information (eg. is the complainant socially/ physically isolated; unwilling to leave the home: cultural barriers inhibit complainant etc ...?</div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Yes<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>No<br/></div>
                            <input class='DFUniversalFields' type="radio" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Officer's Notes<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
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
        </div>
    )
}

export default FamilyViolenceInvestigationReport