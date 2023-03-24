import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {createPerson} from "../../features/person/personSlice";
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

    const {name, dateOfBirth, telephone, address, fps, height, weight, aliases, associatedVehicles, associates, flags, tattoos, hairColour, eyeColour} = formData;
    const {addresses} = useSelector((state) => state.address);
    const {telephones} = useSelector((state) => state.telephone);
    const {vehicles} = useSelector((state) => state.vehicle);
    const dispatch = useDispatch();
    let addressList = [];
    let telephoneList = [];
    let vehicleList = [];

    useEffect(() => {
        dispatch(getAllAddresses());
        dispatch(getAllTelephones());
        dispatch(getAllVehicles());
    }, [dispatch]);
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
        }else{
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
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
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input onBlur={() => setShowListTelephones(false)} onFocus={() => setShowListTelephones(true)} className="DFUniversalFields" type="text" name="telephone" placeholder="(000) 000-0000" value={telephone} onChange={onChange}/>
                            {
                                showListTelephones && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            telephoneList.map((item) => <li onClick={() => onSelectTelephone(item.telephoneNumber)}>{item.telephoneNumber}</li>)
                                        }
                                    </ul>
                            }
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Address<br/></div>
                            <input onBlur={() => setShowListAddress(false)} onFocus={() => setShowListAddress(true)} className="DFUniversalFields" type="text" name="address" placeholder="123 Random Place Blvd. W, Lethbridge AB" value={address} onChange={onChange}/>
                            {
                                showListAddress && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            addressList.map((item) => <li onClick={() => onSelectAddress(item.address)}>{item.address}</li>)
                                        }
                                    </ul>
                            }
                        </label>
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
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Associated Vehicles<br/></div>
                            <input onBlur={() => setShowListVehicles(false)} onFocus={() => setShowListVehicles(true)} className="DFUniversalFields" type="text" name="associatedVehicles" placeholder="2018 Honda Civic LX" value={associatedVehicles} onChange={onChange}/>
                            {
                                showListVehicles && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            vehicleList.map((item) => <li onClick={() => onSelectAssociatedVehicles(`${item.yearOfVehicle} ${item.makeOfVehicle} ${item.modelOfVehicle}`)}>{`${item.yearOfVehicle} ${item.makeOfVehicle} ${item.modelOfVehicle}`}</li>)
                                        }
                                    </ul>
                            }
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
                <div className="DFBottomBar">
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Clear All</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton2">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MDPerson;