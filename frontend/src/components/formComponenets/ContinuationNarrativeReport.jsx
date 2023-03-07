import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const ContinuationNarrativeReport = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Continuation (Narrative) Report</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>RE:<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Occurence (File) Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Time<br/></div>
                            <input class='DFUniversalFields' type="time" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Action Taken<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Concluded<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date Complainant Notified<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>D.D. - D.A. | SUI ><br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator Signature<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Supervisor Signature<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="name"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ContinuationNarrativeReport