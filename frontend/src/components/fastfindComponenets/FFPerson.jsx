import React from "react";

const FFPerson = () => {

    return (
        <div style={{marginBottom: '3rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Person</h3>
                <button className="DFBottomBarButton2" to={`/detailedFind/person`}>Switch to Detailed Find</button>
            </div>
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
        </div>
    )
}

export default FFPerson