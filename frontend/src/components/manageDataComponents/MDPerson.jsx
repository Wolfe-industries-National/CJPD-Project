import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {createPerson} from "../../features/person/personSlice";
import { searchPerson, getAllPerson } from "../../features/person/personSlice";
import {searchAddress, getAllAddresses, reset} from "../../features/address/addressSlice";
import {searchTelephone, getAllTelephones, resetTelephone} from '../../features/telephone/telephoneSlice';
import {searchVehicle, getAllVehicles, resetVehicles} from '../../features/vehicle/vehicleSlice';

const MDPerson = () => {

    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: Date,
        telephone: '',
        address: '',
        fps: '',
        height: '',
        weight: '',
        aliases: '',
        associatedVehicles: '',
        associates: '',
        flags: '',
        tattoos: '',
        hairColour: '',
        eyeColour: ''
    });
    const [showListAddress, setShowListAddress] = useState(false);
    const [showListTelephones, setShowListTelephones] = useState(false);
    const [showListVehicles, setShowListVehicles] = useState(false);
    const [showListOfPerson, setShowListPerson] = useState(false);

    const {name, dateOfBirth, telephone, address, fps, height, weight, aliases, associatedVehicles, associates, flags, tattoos, hairColour, eyeColour} = formData;
    const {addresses} = useSelector((state) => state.address);
    const {telephones} = useSelector((state) => state.telephone);
    const {vehicles} = useSelector((state) => state.vehicle);
    const {people} = useSelector((state) => state.person);
    const dispatch = useDispatch();
    let addressList = [];
    let telephoneList = [];
    let vehicleList = [];
    let peopleList = [];

    useEffect(() => {
        dispatch(getAllPerson());
        dispatch(getAllAddresses());
        dispatch(getAllTelephones());
        dispatch(getAllVehicles());
    }, [dispatch]);
    peopleList = people;
    addressList = addresses;
    telephoneList = telephones;
    vehicleList = vehicles;

    const onChange = (e) => {
        if(e.target.name === 'address'){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            if(e.target.value.length > 1){
                console.log(e.target.value);
                dispatch(reset());
                dispatch(searchAddress({query: e.target.value}));
                console.log(addresses);
            }else{
                dispatch(getAllAddresses());
            }
        }else if(e.target.name === 'telephone'){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            if(e.target.value.length > 1){
                console.log(e.target.value);
                dispatch(resetTelephone());
                dispatch(searchTelephone({query: e.target.value}));
                console.log(addresses);
            }else{
                dispatch(getAllTelephones());
            }
        }else if(e.target.name === 'associatedVehicles'){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            if(e.target.value.length > 1){
                console.log(e.target.value);
                dispatch(resetVehicles());
                dispatch(searchVehicle({query: e.target.value}));
            }else{
                dispatch(getAllVehicles());
            }
        }else if(e.target.name === 'associates'){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            if(e.target.value.length > 1){
                console.log(e.target.value);
                // dispatch(reset());
                dispatch(searchPerson({query: e.target.value}));
                console.log(addresses);
            }else{
                dispatch(getAllPerson());
            }
        }else{
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(name !== ''){
            dispatch(createPerson(formData));
            toast.success(`Successfuly created ${name}`);
            setFormData({
                name: '',
                dateOfBirth: '',
                telephone: '',
                address: '',
                fps: '',
                height: '',
                weight: '',
                aliases: '',
                associatedVehicles: '',
                associates: '',
                flags: '',
                tattoos: '',
                hairColour: '',
                eyeColour: ''
            })
            console.log(formData);
        }else {
            toast.error('Add name');
        }
    }

    const onSelectAddress = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            address: value
        }))
    }

    const onSelectTelephone = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            telephone: value
        }))
    }

    const onSelectAssociatedVehicles = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            associatedVehicles: value
        }))
    }

    const onSelectPerson = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            associates: value
        }))
    }

    const clearFields = () => {
        setFormData({
            name: '',
            dateOfBirth: Date,
            telephone: '',
            address: '',
            fps: '',
            height: '',
            weight: '',
            aliases: '',
            associatedVehicles: '',
            associates: '',
            flags: '',
            tattoos: '',
            hairColour: '',
            eyeColour: ''
        })
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Person</h3>
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

                    <div className="DFUniversalData" style={{position: 'relative', display: 'block'}}>
                        <div className="DFUniversalInnerTitle">Telephone<br/></div>
                        <input onFocus={() => setShowListTelephones(true)} className="DFUniversalFields" type="text" name="telephone" placeholder="(000) 000-0000" value={telephone} onChange={onChange}/>
                        {
                            showListTelephones && (
                                <div>
                                    <div style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        <div key={'close'} style={{color: 'red'}} onClick={() => setShowListTelephones(false)}>X</div>
                                        {
                                            telephoneList.map((item, index) => <div>
                                                <div key={index} onClick={() => onSelectTelephone(`${item.telephoneNumber} | ${item.telephoneDBID}`)}>
                                                    {item.telephoneNumber} | {item.telephoneDBID}
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData" style={{position: 'relative', display: 'block'}}>
                        <div className="DFUniversalInnerTitle">Address<br/></div>
                        <input onFocus={() => setShowListAddress(true)} className="DFUniversalFields" type="text" name="address" placeholder="123 Random Place Blvd. W, Lethbridge AB" value={address} onChange={onChange}/>
                        {
                            showListAddress && (
                                <div>
                                    <div style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        <div key={'close'} style={{color: 'red'}} onClick={() => setShowListAddress(false)}>X</div>
                                        {
                                            addressList.map((item, index) => <div>
                                                <div key={index} onClick={() => onSelectAddress(`${item.address} | ${item.addressDBID}`)}>
                                                    {item.address} | {item.addressDBID}
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Finger Print Section<br/></div>
                            <input className="DFUniversalFields" type="text" name="fps" placeholder="A000000"  value={fps} onChange={onChange}/>
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
                    <div className="DFUniversalData" style={{position: 'relative', display: 'block'}}>
                        <div className="DFUniversalInnerTitle">Associated Vehicles<br/></div>
                        <input onFocus={() => setShowListVehicles(true)} className="DFUniversalFields" type="text" name="associatedVehicles" placeholder="2018 Honda Civic LX" value={associatedVehicles} onChange={onChange}/>
                        {
                            showListVehicles && (
                                <div>
                                    <div style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        <div key={'close'} style={{color: 'red'}} onClick={() => setShowListVehicles(false)}>X</div>
                                        {
                                            vehicleList.map((item, index) => <div>
                                                <div key={index} onClick={() => onSelectAssociatedVehicles(`${item.yearOfVehicle} ${item.makeOfVehicle} ${item.modelOfVehicle} | ${item.vehicleDBID}`)}>
                                                    {`${item.yearOfVehicle} ${item.makeOfVehicle} ${item.modelOfVehicle} | ${item.vehicleDBID}`}
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>


                    <div className="DFUniversalData" style={{position: 'relative', display: 'block'}}>
                        <div className="DFUniversalInnerTitle">Associates<br/></div>
                        <input onFocus={() => setShowListPerson(true)} className="DFUniversalFields" type="text" name="associates" placeholder="Bill Benson" value={associates} onChange={onChange}/>
                        {
                            showListOfPerson && (
                                <div>
                                    <div style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        <div key={'close'} style={{color: 'red'}} onClick={() => setShowListPerson(false)}>X</div>
                                        {
                                            peopleList.map((item, index) => <div>
                                                <div key={index} onClick={() => onSelectPerson(`${item.name} | ${item.personDBID}`)}>
                                                    {`${item.name} | ${item.personDBID}`}
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Flags<br/></div>
                            <input className="DFUniversalFields" type="text" name="flags" placeholder="Violent Tendencies, etc." value={flags} onChange={onChange}/>
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
                    <button className="DFBottomBarButton2" onClick={onSubmit}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default MDPerson;