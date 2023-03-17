import React from "react";

const DFBusOrg = () => {

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Detailed Find Business / Organization</h3>
            <form className="DFUniversalForm">

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="First & Last Name"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Business<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Random Incorporated ltd."/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Convenience Store"/>
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

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Alarm Company<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Telus Security"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="number" name="" placeholder="(000) 000-0000"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFBusOrg;