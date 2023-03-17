import React from "react";

const DFVehicle = () => {

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Detailed Find Vehicle</h3>
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
                            <div className="DFUniversalInnerTitle">Make<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Honda"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Model<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Civic"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Year<br/></div>
                            <input className="DFUniversalFields" type="number" name="" placeholder="2018"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="Silver"/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Vehicle Identification Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="4Y1SL65848Z411439"/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">License Plate Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="" placeholder="AAA-0000"/>
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default DFVehicle;