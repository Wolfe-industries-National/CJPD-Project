import React from "react";

const DFOccurrence = () => {

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Detailed Find Occurrence</h3>
            <form className="DFUniversalForm">

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">File Number<br/></div>
                            <input className="DFUniversalFields" type="number" name="" placeholder="12345678"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Person<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="First & Last Name"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Business / Organization<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Random Incorporated ltd."/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Property<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="House, Apartment, Hotel, Etc."/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Vehicle<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="2018 Honda Civic LX"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="number" name="" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Officer / Unit<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="1234567"/>
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
                </div>

            </form>
        </div>
    )
}

export default DFOccurrence;