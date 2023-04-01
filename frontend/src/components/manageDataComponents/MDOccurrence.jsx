import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {createOccurrence} from "../../features/occurrence/occurrenceSlice";
import { searchPerson, getAllPerson } from "../../features/person/personSlice";
import { searchBusOrg, getAllBusOrg } from "../../features/busOrg/busOrgSlice";
import { searchProperty, getAllProperties } from "../../features/property/propertySlice";
import {searchAddress, getAllAddresses, reset} from "../../features/address/addressSlice";
import {searchTelephone, getAllTelephones, resetTelephone} from '../../features/telephone/telephoneSlice';
import {searchVehicle, getAllVehicles, resetVehicles} from '../../features/vehicle/vehicleSlice';
import { getAllOfficerUnits, searchOfficerUnit } from "../../features/officerUnit/officerUnitSlice";

const MDOccurrence = () => {

    const [formData, setFormData] = useState({
        fileNumber: '',
        summary: '',
        person: '',
        busOrg: '',
        property: '',
        vehicle: '',
        telephone: '',
        officerUnit: '',
        address: ''
    });
    const [showListOfPerson, setShowListPerson] = useState(false);
    const [showListOfBusiness, setShowListOfBusiness] = useState(false);
    const [showListProperty, setShowListProperty] = useState(false);
    const [showListOfficerUnits, setShowListOfficerUnits] = useState(false);
    const [showListAddress, setShowListAddress] = useState(false);
    const [showListTelephones, setShowListTelephones] = useState(false);
    const [showListVehicles, setShowListVehicles] = useState(false);

    const {fileNumber, summary, person, busOrg, property, vehicle, telephone, officerUnit, address} = formData;
    const {people} = useSelector((state) => state.person);
    const {busOrgs} = useSelector((state) => state.busOrg);
    const {properties} = useSelector((state) => state.property);
    const {vehicles} = useSelector((state) => state.vehicle);
    const {telephones} = useSelector((state) => state.telephone);
    const {officerUnits} = useSelector((state) => state.officerUnit);
    const {addresses} = useSelector((state) => state.address);

    const dispatch = useDispatch();

    let peopleList = [];
    let busOrgList = [];
    let propertyList = [];
    let officerUnitList = [];
    let addressList = [];
    let telephoneList = [];
    let vehicleList = [];

    useEffect(() => {
        dispatch(getAllPerson());
        dispatch(getAllBusOrg());
        dispatch(getAllProperties());
        dispatch(getAllOfficerUnits());
        dispatch(getAllAddresses());
        dispatch(getAllTelephones());
        dispatch(getAllVehicles());
    }, [dispatch]);
    peopleList = people;
    busOrgList = busOrgs;
    propertyList = properties;
    officerUnitList = officerUnits;
    addressList = addresses;
    telephoneList = telephones;
    vehicleList = vehicles;

    const onChange = (e) => {
        if(e.target.name === 'officerUnit'){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            if(e.target.value.length > 1){
                console.log(e.target.value);
                // dispatch(reset());
                dispatch(searchOfficerUnit({query: e.target.value}));
                console.log(addresses);
            }else{
                dispatch(getAllOfficerUnits());
            }
        }else if(e.target.name === 'property'){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            if(e.target.value.length > 1){
                console.log(e.target.value);
                // dispatch(reset());
                dispatch(searchProperty({query: e.target.value}));
                console.log(addresses);
            }else{
                dispatch(getAllProperties());
            }
        }else if(e.target.name === 'busOrg'){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            if(e.target.value.length > 1){
                console.log(e.target.value);
                // dispatch(reset());
                dispatch(searchBusOrg({query: e.target.value}));
                console.log(addresses);
            }else{
                dispatch(getAllBusOrg());
            }
        }else if(e.target.name === 'person'){
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
        }else if(e.target.name === 'address'){
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
        }else if(e.target.name === 'vehicle'){
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
        if(fileNumber !== '' && summary !== ''){
            dispatch(createOccurrence(formData));
            toast.success(`Successfuly created Occurrence ${fileNumber}`);
            setFormData({
                fileNumber: '',
                summary: '',
                person: '',
                busOrg: '',
                property: '',
                vehicle: '',
                telephone: '',
                officerUnit: '',
                address: ''
            })
            console.log(formData);
        }else{
            toast.error('Please add file number and summary to occurrence');
        }
    }

    const onSelectPerson = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            person: value
        }))
    }

    const onSelectBusiness = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            busOrg: value
        }))
    }

    const onSelectProperty = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            property: value
        }))
    }

    const onSelectVehicle = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            vehicle: value
        }))
    }

    const onSelectTelephone = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            telephone: value
        }))
    }

    const onSelectAddress = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            address: value
        }))
    }

    const clearFields = () => {
        setFormData({
            fileNumber: '',
            summary: '',
            person: '',
            busOrg: '',
            property: '',
            vehicle: '',
            telephone: '',
            officerUnit: '',
            address: ''
        })
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Occurrence</h3>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">File Number<br/></div>
                            <input className="DFUniversalFields" type="number" name="fileNumber" placeholder="12345678" value={fileNumber} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Summary<br/></div>
                            <textarea className="UniversalFieldsTB" name="summary" value={summary} onChange={onChange}></textarea>
                        </label>
                    </div>
                </div>


                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Person<br/></div>
                            <input onBlur={() => setShowListPerson(false)} onFocus={() => setShowListPerson(true)} className="DFUniversalFields" type="text" name="person" placeholder="First & Last Name" value={person} onChange={onChange}/>
                            {
                                showListOfPerson && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            peopleList.map((item) => <li onClick={() => onSelectPerson(item.name)}>{item.name}</li>)
                                        }
                                    </ul>
                            }
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Business / Organization<br/></div>
                            <input onBlur={() => setShowListOfBusiness(false)} onFocus={() => setShowListOfBusiness(true)} className="DFUniversalFields" type="text" name="busOrg" placeholder="Random Incorporated ltd." value={busOrg} onChange={onChange}/>
                            {
                                showListOfBusiness && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            busOrgList.map((item) => <li onClick={() => onSelectBusiness(item.name)}>{item.name}</li>)
                                        }
                                    </ul>
                            }
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Property<br/></div>
                            <input onBlur={() => setShowListProperty(false)} onFocus={() => setShowListProperty(true)} className="DFUniversalFields" type="text" name="property" placeholder="House, Apartment, Hotel, Etc." value={property} onChange={onChange}/>
                            {
                                showListProperty && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            propertyList.map((item) => <li onClick={() => onSelectProperty(item.typeOfProperty)}>{item.typeOfProperty}</li>)
                                        }
                                    </ul>
                            }
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Vehicle<br/></div>
                            <input onBlur={() => setShowListVehicles(false)} onFocus={() => setShowListVehicles(true)} className="DFUniversalFields" type="text" name="vehicle" placeholder="2018 Honda Civic LX" value={vehicle} onChange={onChange}/>
                            {
                                showListVehicles && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            vehicleList.map((item) => <li onClick={() => onSelectVehicle(`${item.yearOfVehicle} ${item.makeOfVehicle} ${item.modelOfVehicle}`)}>{`${item.yearOfVehicle} ${item.makeOfVehicle} ${item.modelOfVehicle}`}</li>)
                                        }
                                    </ul>
                            }
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
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Officer / Unit<br/></div>
                            <input onBlur={() => setShowListOfficerUnits(false)} onFocus={() => setShowListOfficerUnits(true)} className="DFUniversalFields" type="number" name="officerUnit" placeholder="1234567" value={officerUnit} onChange={onChange}/>
                            {/* {
                                showListOfficerUnits && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            officerUnitList.map((item) => <li onClick={() => onSelectTelephone(item.name)}>{item.name}</li>)
                                        }
                                    </ul>
                            } */}
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

export default MDOccurrence;