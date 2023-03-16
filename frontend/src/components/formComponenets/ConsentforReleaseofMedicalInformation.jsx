import React, {useState} from 'react';
import {PDFDocument} from "pdf-lib";

const ConsentforReleaseofMedicalInformation = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Consent for Release of Medical Information Form</h3>
            <form class='DFUniversalForm'>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>The patient/client or his/her authorized representative must complete this form before Alberta Health Services (AHS) will disclose the patients/client health information to someone else (unless Albertas Health Information Act authorizes disclosure without consent).</div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <h3 class='DFUniversalTitle2'>Section A: Patient / Client Information</h3>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Patient/Client Name<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Personal Health Number<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>



                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <h3 class='DFUniversalTitle2'>Section B: What health information do you want disclosed?</h3>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>Please provide details about the health information you want disclosed, such as the name of the AHS location/facility that provided the health service and the time period of the records.</div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <h3 class='DFUniversalTitle2'>Section C: What individual/organization is the patients/clients health information being disclosed to?</h3>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Individual/Organization<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Phone<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Address<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>City / Town<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Province<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Postal Code<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <h3 class='DFUniversalTitle2'>Section D: What is the purpose for disclosure?</h3>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>Please provide the reason why you want to disclose the health information (Required).</div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <h3 class='DFUniversalTitle2'>Section E: Authorized Representative (required when asking for health information on behalf of another person)</h3>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>If you are signing on behalf of the patient/client named in section A, please choose one of the options below and provide a copy of supporting documents.</div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center"}}>
                            I, <input style={{margin: 5}} class='DFUniversalFields' type="text" name="" placeholder="Representative Name"/> am
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center"}}>
                            <input id="CB-CRMI-1" class='CRMICheckboxFix' type="checkbox" name=""/>
                            <label for="CB-CRMI-1">The parent or legally appointed guardian of the patient/client who is under 18 years of age and who is not a mature minor in relation to their health information.</label>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center", justifyContent: "center"}}>
                            <input id="CB-CRMI-2" class='CRMICheckboxFix' type="checkbox" name=""/>
                            <label for="CB-CRMI-2">The guardian or trustee appointed for the adult patient/client under the Adult Guardianship and Trusteeship Act exercising my powers or duties as their guardian or trustee.</label>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center"}}>
                            <input id="CB-CRMI-2" class='CRMICheckboxFix' type="checkbox" name=""/>
                            <label for="CB-CRMI-1">The patient/client's agent named in an activated Personal Directive under the Personal Directives Act exercising my authority set out in the Personal Directive.</label>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center"}}>
                            <input id="CB-CRMI-2" class='CRMICheckboxFix' type="checkbox" name=""/>
                            <label for="CB-CRMI-1">The personal representative of a deceased patient/client appointed by the patient/client's will or by the Court, administering the patient/client's estate.</label>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center"}}>
                            <input id="CB-CRMI-2" class='CRMICheckboxFix' type="checkbox" name=""/>
                            <label for="CB-CRMI-1">The patient's named attorney in a Power of Attorney currently in effect exercising my powers and duties conferred by the Power of Attorney.</label>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center"}}>
                            <input id="CB-CRMI-2" class='CRMICheckboxFix' type="checkbox" name=""/>
                            <label for="CB-CRMI-1">The patient/client's nearest relative selected in accordance with the Mental Health Act carrying out my obligations as the nearest relative.</label>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center"}}>
                            <input id="CB-CRMI-2" class='CRMICheckboxFix' type="checkbox" name=""/>
                            <label for="CB-CRMI-1">The patient/client's specific decision maker, supportive decision maker, or co-decision maker, authorized in accordance with the Adult Guardianship and Trusteeship Act carrying out the related duties.</label>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{display: "inline-flex", alignItems: "center"}}>
                            <input id="CB-CRMI-2" class='CRMICheckboxFix' type="checkbox" name=""/>
                            <label for="CB-CRMI-1">A person with written authorization from the patient/client to act on their behalf.</label>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <h3 class='DFUniversalTitle2'>Section F: Consent for Disclosure</h3>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>I authorize Alberta Health Services to disclose the patient/client's health information described above to the individual or organization(s) identified above. I understand why I have been asked to disclose my health information and I am aware of the risks and benefits of consenting or refusing to consent. I understand I may revoke this consent in writing at any time.</div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Consent is Effective<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Expiry Date (valid for 2 years if no date provided)<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Person Giving Consent<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Phone<br/></div>
                            <input class='DFUniversalFields' type="number" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Email<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Signature<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div>Information on this form and the supporting documentation are collected under the authorization of sections 20 - 22 of the Health Information Act for the purpose of responding to your request and will be filed on the patient/client record. If you have questions about the collection and use of any information on this form, contact the Disclosure Help Line at 1.855.312.2265.</div>
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



export default ConsentforReleaseofMedicalInformation