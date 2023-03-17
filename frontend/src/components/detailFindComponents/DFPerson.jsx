import React from "react";

const DFPerson = () => {

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Detailed Find Person</h3>
            <form className="DFUniversalForm">

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Name<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="First & Last Name"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Date of Birth<br/></div>
                            <input className="DFUniversalFields" type="date" name=""/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="number" name="" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Address<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="123 Random Place Blvd. W, Lethbridge AB"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Finger Print Section<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="A000000"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Height (cm)<br/></div>
                            <input className="DFUniversalFields" type="number" name="" placeholder="188 cm"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Weight (lbs)<br/></div>
                            <input className="DFUniversalFields" type="number" name="" placeholder="203 lbs."/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Aliases<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Ice"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Associated Vehicles<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="2018 Honda Civic LX"/>
                        </label>
                    </div>
                    <div className="DFUniversalData"td>
                        <label>
                            <div className="DFUniversalInnerTitle">Associates<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Bill Benson"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Flags<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Violent Tendencies, Etc."/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Tattoos / Distinguishing Feature(s)<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Scar on left cheek"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Hair Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Black"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Eye Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Blue"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFPerson;