import React, {useState} from 'react';
import {PDFDocument} from "pdf-lib";

const ConsenttoSearch = () => {

    const [formData, setFormData] = useState({
        investigatorName: '',
        person: '',
        exhibitItem: '',
        location: '',
        itemsOwnership: '',
        reportedDate: '',
        witnessName: '',
        date: '',
        time: '',


    });
    const {person, investigatorName, exhibitItem, location, itemsOwnership, reportedDate, witnessName, date, time  } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // function to submit the formData object to the pdf lib
    }

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Consent to Search</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>I,&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="person" placeholder='Name' value={person} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <div class='DFUniversalInnerTitle'>do hereby voluntarily give my consent and authorize&nbsp;</div>
                    </div>
                    <div class='DFUniversalData'>
                        <input class='DFUniversalFields' type="text" name="investigatorName" placeholder='Name' value={investigatorName} onChange={onChange}/><br/>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>to search&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="exhibitItem"  placeholder='Item to be searched' value={exhibitItem} onChange={onChange} /><br/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>situated at </div>
                            <input class='DFUniversalFields' type="text" name="location" placeholder='Address' value={location} onChange={onChange} /><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>for the following goods / items </div>
                            <input class='DFUniversalFields' type="text" name="exhibitItem" placeholder='Good / Item' value={exhibitItem} onChange={onChange}/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>The&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="exhibitItem" placeholder='Item' value={exhibitItem} onChange={onChange} /><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>to be searched belongs to </div>
                            <input class='DFUniversalFields' type="text" name="itemsOwnership" placeholder='Name' value={itemsOwnership} onChange={onChange}/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>and I have control over it by virtue of </div>
                            <input class='DFUniversalFields' type="text" name="" placeholder='Own / Rent / Borrowed'/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Since&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="reportedDate" placeholder='Date / Timeframe' value={reportedDate} onChange={onChange} /><br/>
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
                            <input class='DFUniversalFields' type="text" name="person" value={person} onChange={onChange}/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Signature&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="signature" /><br/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Date&nbsp;</div>
                            <input class='DFUniversalFields' type="date" name="date" value={date} onChange={onChange}/>
                            <div class='DFUniversalInnerTitle'>&nbsp;Time&nbsp;</div>
                            <input class='DFUniversalFields' type="time" name="time" value={time} onChange={onChange}/><br/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label class='InlineForm'>
                            <div class='DFUniversalInnerTitle'>Place&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="location" placeholder="Address" value={location} onChange={onChange} />
                            <div class='DFUniversalInnerTitle'>&nbsp;Witness&nbsp;</div>
                            <input class='DFUniversalFields' type="text" name="witnessName" placeholder="Name" value={witnessName} onChange={onChange}/><br/>
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

export default ConsenttoSearch