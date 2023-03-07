import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const ConsenttoSearch = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Consent to Search</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>I,&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder='Name'/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='DFUniversalInnerTitle'>do hereby voluntarily give my consent and authorize&nbsp;</div>
                    </div>
                    <div class='DFUniversalData'>
                        <input class='DFUniversalFields' type="text" name="name" placeholder='Name'/><br/>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>to search&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder='Item to be searched'/><br/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>situated at </div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder='Address'/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>for the following goods / items </div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder='Good / Item'/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>The&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder='Item'/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>to be searched belongs to </div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder='Name'/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>and I have control over it by virtue of </div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder='Own / Rent / Borrowed'/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Since&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder='Date / Timeframe'/><br/>
                        </label>
                    </div>
                </div>

                <div class='RPCTSRow'>
                    <div class='RPCTSData'>
                        <div class='RPCTSTitle'>I give my consent to this search knowing that:</div><br/><br/>
                        <div class='RPCTSText'>1. I am under no obligation to consent to this search.</div><br/>
                        <div class='RPCTSText'>2. If I consent to the search, I maintain my ability to withdraw that consent at any time during the search.</div><br/><br/>
                        <div class='RPCTSText'>I fully understand that if any of the goods listed above are found, or if anything else is found that could produce evidence of a criminal, federal or provincial offence, that the items may be subject to seizure, and I may be arrested, charged and prosecuted.</div><br/><br/>
                        <div class='RPCTSText'>I give this consent voluntarily and have not been coerced, threatened, or promised any advantage by the police or anyone else.</div><br/>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <div class='RPCTSTitleAlt'>Consent given by&nbsp;</div>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>Name&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Signature&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name"/><br/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Date&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Time&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name"/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>Place&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name"/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Witness&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="name"/><br/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ConsenttoSearch