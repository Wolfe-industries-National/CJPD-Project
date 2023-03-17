import React from "react";

const DFProperty = () => {

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Detailed Find Property</h3>
            <form className="DFUniversalForm">

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Necklace, Car, Etc."/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="First & Last Name"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Serial Number / Vehicle Identification Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="1234567"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Value<br/></div>
                            <input className="DFUniversalFields" type="number" name="" placeholder="$123"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFProperty;