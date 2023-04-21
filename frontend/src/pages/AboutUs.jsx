import React from "react";
import Unknown from "../Images/PersonsUnknown.jpg";
import wolfeLogo from "../Images/WolfeLogo.png";

/*
import Felipe from "../Images/.png";
import Chase from "../Images/.png";
import Logan from "../Images/.png";
import Mitchell from "../Images/.png";
import Wangwei from "../Images/.png";
import Mauricio from "../Images/.png";
*/

const AboutUs = () => {

    return (
        <div className="AboutContainer">

            <h1 className="AboutTitle1">Wolfe Industries National</h1>
            <h1 className="AboutTitle2">The Developers</h1>

            <div className="AboutRow">
                <div className="AboutData" style={{borderRight: "3px solid #DDBA2C"}}>
                    <img src={Unknown} alt="Logo" height={"auto"} width={"40%"} />
                    <h4 className="AboutName">Felipe Loba Ya Yunta</h4>
                    <p className="AboutDescription">Project Manager / Lead Backend Developer</p>
                </div>
                <div className="AboutData">
                    <img src={Unknown} alt="Logo" height={"auto"} width={"40%"} />
                    <h4 className="AboutName">Chase Rollier</h4>
                    <p className="AboutDescription">Frontend Lead Developer</p>
                </div>
            </div>

            <div className="AboutRow">
                <div className="AboutData" style={{borderRight: "3px solid #DDBA2C"}}>
                    <img src={Unknown} alt="Logo" height={"auto"} width={"40%"} />
                    <h4 className="AboutName">Logan Pratt</h4>
                    <p className="AboutDescription">Backend Developer</p>
                </div>
                <div className="AboutData">
                    <img src={Unknown} alt="Logo" height={"auto"} width={"40%"} />
                    <h4 className="AboutName">Mitchell Weires</h4>
                    <p className="AboutDescription">Lead Design Developer</p>
                </div>
            </div>

            <div className="AboutRow">
                <div className="AboutData" style={{borderRight: "3px solid #DDBA2C"}}>
                    <img src={Unknown} alt="Logo" height={"auto"} width={"40%"} />
                    <h4 className="AboutName">Wangwei Shen</h4>
                    <p className="AboutDescription">Assistant Design Developer</p>
                </div>
                <div className="AboutData">
                    <img src={Unknown} alt="Logo" height={"auto"} width={"40%"} />
                    <h4 className="AboutName">Mauricio Rosas</h4>
                    <p className="AboutDescription">Customer Relations / Team Lead</p>
                </div>
            </div>

        </div>
    )
}


export default AboutUs;