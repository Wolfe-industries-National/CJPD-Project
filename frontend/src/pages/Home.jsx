import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
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
            <div style={{margin: '5rem 10rem 0 10rem', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{marginBottom: '1rem'}}>
                        <Link style={{fontSize: '1.6rem', textDecoration: 'none', color: '#01244C'}} to="/fastFind/person">Fast Find</Link>
                        <hr style={{height: '0.1rem', backgroundColor: '#DDBA2C', border: 'none'}} />
                    </div>
                    <ul style={{listStyle: 'none', textAlign: 'center', width: '12rem'}}>
                        {fastFindChoicesList.map((item, index) => {
                            return (<Link className="homeLinkBtn homeLinkBtnFastFind" key={index} to={`/fastFind/${item.value}`}>{item.name}</Link>);
                        })}
                    </ul>
                </div>

                <div>
                    <img style={{borderRadius: "50%", boxShadow: "0px 0px 50px #1A282B", width: '33rem', marginTop: '1rem'}} src={FinalLogoImageCJPD} alt="HomeImage"/>
                </div>

                <div style={{textAlign: 'center'}}>
                    <div style={{marginBottom: '1rem'}}>
                        <Link style={{fontSize: '1.6rem', textDecoration: 'none', color: '#01244C'}} to="/detailedFind/person">Detailed Find</Link>
                        <hr style={{height: '0.1rem', backgroundColor: '#DDBA2C', border: 'none'}} />
                    </div>
                    <ul style={{listStyle: 'none', textAlign: 'center', width: '12rem', marginLeft: '0.3rem'}}>
                        {detailedFindChoicesList.map((item, index) => {
                            return (<Link className="homeLinkBtn homeLinkBtnDetailedFind" key={index} to={`/detailedFind/${item.value}`}>{item.name}</Link>);
                        })}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home