import React from "react";

const FFPerson = () => {

    return (
        <div className="FFUniversalContainer">
            <h3 className="FFUniversalTitle">Fast Find Person</h3>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Person"/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Person<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Date of Birth<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Age<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Fingerprint Section<br/></div>
                    </div>
                </div>
            </div>
            <div className="DFBottomBar">
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1">Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1">Find Now</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton2" to={`/detailedFind/person`}>Switch to Detailed Find</button>
                </div>
            </div>
        </div>
    )
}

export default FFPerson