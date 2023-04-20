import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {detailSearchPerson} from "../../features/person/personSlice";
import { Link } from "react-router-dom";

const DFPerson = () => {

    const [searchData, setSearchData] = useState({
        name: '',
        dateOfBirth: Date,
        telephone: '',
        address: '',
        fps: '',
        height: '',
        weight: '',
        aliases: [''],
        associatedVehicles: [''],
        associates: [''],
        flags: [''],
        tattoos: [''],
        hairColour: '',
        eyeColour: ''
    });

    const {name, dateOfBirth, telephone, address, fps, height, weight, aliases, associatedVehicles, associates, flags, tattoos, hairColour, eyeColour} = searchData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {people} = useSelector((state) => state.person);
    let personList = [];
    const currentYear = new Date().getFullYear();

    const onChange = (e) => {
        setSearchData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(detailSearchPerson(searchData));
        personList = people;
        console.log(personList);
    }

    const clearFields = () => {
        setSearchData({
            name: '',
            dateOfBirth: Date,
            telephone: '',
            address: '',
            fps: '',
            height: '',
            weight: '',
            aliases: [''],
            associatedVehicles: [''],
            associates: [''],
            flags: [''],
            tattoos: [''],
            hairColour: '',
            eyeColour: ''
        })
    }

    return (
        <div className="DFUniversalContainer">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                <h3 className="DFUniversalTitle" style={{marginBottom: 0}}>Detailed Find Person</h3>
                <div className="DFBottomBarInnerContainer">
                    <Link className="DFBottomBarButton2" to='/fastFind/person'>Switch to Fast Find</Link>
                </div>
            </div>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Name<br/></div>
                            <input className="DFUniversalFields" type="text" name="name" placeholder="First & Last Name" value={name} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Date of Birth<br/></div>
                            <input className="DFUniversalFields" type="date" name="dateOfBirth" value={dateOfBirth} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="text" name="telephone" placeholder="(000) 000-0000" value={telephone} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Address<br/></div>
                            <input className="DFUniversalFields" type="text" name="address" placeholder="123 Random Place Blvd. W, Lethbridge AB" value={address} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Finger Print Section<br/></div>
                            <input className="DFUniversalFields" type="text" name="fps" placeholder="A000000" value={fps} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Height (cm)<br/></div>
                            <input className="DFUniversalFields" type="number" name="height" placeholder="188 cm" value={height} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Weight (lbs)<br/></div>
                            <input className="DFUniversalFields" type="number" name="weight" placeholder="203 lbs." value={weight} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Aliases<br/></div>
                            <input className="DFUniversalFields" type="text" name="aliases" placeholder="Ice" value={aliases} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Associated Vehicles<br/></div>
                            <input className="DFUniversalFields" type="text" name="associatedVehicles" placeholder="2018 Honda Civic LX" value={associatedVehicles} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData"td>
                        <label>
                            <div className="DFUniversalInnerTitle">Associates<br/></div>
                            <input className="DFUniversalFields" type="text" name="associates" placeholder="Bill Benson" value={associates} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Flags<br/></div>
                            <input className="DFUniversalFields" type="text" name="flags" placeholder="Violent Tendencies, Etc." value={flags} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Tattoos / Distinguishing Feature(s)<br/></div>
                            <input className="DFUniversalFields" type="text" name="tattoos" placeholder="Scar on left cheek" value={tattoos} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Hair Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="hairColour" placeholder="Black" value={hairColour} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Eye Colour<br/></div>
                            <input className="DFUniversalFields" type="text" name="eyeColour" placeholder="Blue" value={eyeColour} onChange={onChange}/>
                        </label>
                    </div>
                </div>
            </form>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={clearFields}>Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={onSubmit}>Find Now</button>
                </div>
            </div>

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
                {
                    people.map((item, index) => <div style={{ backgroundColor: index%2===0 && 'lightblue', cursor: 'pointer' }} className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/person/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.name ? item.name : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.dateOfBirth ? item.dateOfBirth.split('T')[0] : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.dateOfBirth ? (currentYear - item.dateOfBirth.split('-')[0]) : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.fps ? item.fps : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default DFPerson;