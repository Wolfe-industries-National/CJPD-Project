import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import FinalLogoImageCJPD from "../Images/FinalLogoImageCJPD.png";

const Home = () => {

    const fastFindChoicesList = [
        {
            name: "Person",
            value: "person"
        },
        {
            name: "Occurrence",
            value: "occurrence"
        },
        {
            name: "Bus/Org",
            value: "bus-org"
        },
        {
            name: "Property",
            value: "property"
        },
        {
            name: "Vehicle",
            value: "vehicle"
        },
        {
            name: "Address",
            value: "address"
        },
        {
            name: "Telephone",
            value: "telephone"
        },
        {
            name: "Officer/Unit",
            value: "officer-unit"
        }
    ]

    const detailedFindChoicesList = [
        {
            name: "Person",
            value: "person"
        },
        {
            name: "Occurrence",
            value: "occurrence"
        },
        {
            name: "Bus/Org",
            value: "bus-org"
        },
        {
            name: "Property",
            value: "property"
        },
        {
            name: "Vehicle",
            value: "vehicle"
        },
        {
            name: "Address",
            value: "address"
        }
    ]

    const {user} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate("/login");
        }
    }, [user, navigate]);

    if(!user){
        return <h3>hmm... You are not logged in...</h3>
    }else {
        return (
            <div className="homeContentContainer">
                <div className="homeFFColumn">
                    <Link className="homeFFButton" to="/fastFind/person">Fast Find</Link>
                    <ul className="homeButtonMargin">
                        {fastFindChoicesList.map((item, index) => {
                            return (<li className="homeList" key={index}><Link className="homeListLeft" key={index} to={`/fastFind/${item.value}`}>{item.name}</Link></li>);
                        })}
                    </ul>
                </div>

                <div className="homeRightContainer">
                    <img style={{borderRadius: "50%", boxShadow: "0px 0px 50px #1A282B",}} className="homeImage" src={FinalLogoImageCJPD} alt="Home Image"/>
                </div>
                <div className="homeDFColumn">
                    <Link className="homeDFButton" to="/detailedFind/person">Detailed Find</Link>
                    <ul className="homeButtonMargin">
                        {detailedFindChoicesList.map((item, index) => {
                            return (<li className="homeList" key={index}><Link className="homeListRight" key={index} to={`/detailedFind/${item.value}`}>{item.name}</Link></li>);
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home