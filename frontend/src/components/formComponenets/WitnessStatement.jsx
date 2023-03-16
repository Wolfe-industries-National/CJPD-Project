import React from 'react';

const WitnessStatement = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Witness Statement</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Given Names<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location of Interview<br/></div>
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
                            <div class='DFUniversalInnerTitle'>Phone<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Interview<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Place of Employment / Occupation<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Employer Phone<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigating Officer<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Time Start<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Time End<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Notes<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Interviewing Officer Signature<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Witness Signature<br/></div>
                            <input class='DFUniversalFields' type="text" name=""/>
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

export default WitnessStatement