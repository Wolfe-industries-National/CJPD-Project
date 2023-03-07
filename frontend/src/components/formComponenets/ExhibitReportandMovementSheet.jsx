import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const ExhibitReportandMovementSheet = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Exhibit Report and Movement Sheet</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Department<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Nature of Event<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Exhibits Seized by<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Data Seized<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location of Seizure<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Authority By Which The Seizure Was Made<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Item Number<br/></div>
                            <textarea class='UniversalFieldsTB' name="name"></textarea>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Description of Exhibits Seized<br/></div>
                            <textarea class='UniversalFieldsTB' name="name"></textarea>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='RPCTSTitleAlt'>Certified Correct&nbsp;</div>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>Signature of Investigator&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Date&nbsp;</div>
                            <input class='DFUniversalFields' type="date" name="name"/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>Signature of Supervisor&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Date&nbsp;</div>
                            <input class='DFUniversalFields' type="date" name="name"/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label style={{marginBottom: 100}}>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Item<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Movement to<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Location"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date / Time<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>

                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Data Seized<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>

                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Data Seized<br/></div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Location"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <input class='DFUniversalFields' type="text" name="name"/>

                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <input class='DFUniversalFields' type="text" name="name"/>

                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <input class='DFUniversalFields' type="text" name="name"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ExhibitReportandMovementSheet