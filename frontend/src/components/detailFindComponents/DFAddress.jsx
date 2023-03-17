import React from "react";

const DFAddress = () => {

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Detailed Find Address</h3>
            <form className="DFUniversalForm">

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner / Tenant<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="First & Last Name"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Building Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="House, Apartment, Hotel, Etc."/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="CheckboxInnerTitle">Vacant<br/></div>
                            <div className="UniversalRadioContainer">
                                <div className="RadioChoiceContainer">
                                    <input id="DFARadioYes" className="UniversalRadioFix" type="radio" name="RC-DFA" value="yes"/>
                                    <label for="DFARadioYes">Yes</label>
                                </div>
                                <div className="RadioChoiceContainer">
                                    <input id="DFARadioNo" className="UniversalRadioFix" type="radio" name="RC-DFA" value="no"/>
                                    <label for="DFARadioNo">No</label>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Country<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Canada"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Province<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Alberta"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">City<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Lethbridge"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Address<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="123 Random Place Blvd. W"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFAddress;