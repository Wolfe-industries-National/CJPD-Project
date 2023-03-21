import React from "react";

const FFOccurrence = () => {

    return (
        <div >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Occurrence</h3>
                <button className="DFBottomBarButton2" to={`/detailedFind/occurrence`}>Switch to Detailed Find</button>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Person"/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">File Number<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Description<br/></div>
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
                    <button className="DFBottomBarButton2" to={`/detailedFind/occurrence`}>Switch to Detailed Find</button>
                </div>
            </div>
        </div>
    )
}

export default FFOccurrence