import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {createBusOrg} from "../../features/busOrg/busOrgSlice";
import {searchAddress, getAllAddresses, reset} from "../../features/address/addressSlice";
import { searchTelephone, getAllTelephones, resetTelephone } from "../../features/telephone/telephoneSlice";

const MDBusOrg = () => {

    const [formData, setFormData] = useState({
        owner: '',
        name: '',
        typeOfBusOrg: '',
        address: '',
        alarmCompany: '',
        telephoneNumber: ''
    });
    const [showListAddress, setShowListAddress] = useState(false);
    const [showListTelephone, setShowListTelephone] = useState(false);

    const {owner, name, typeOfBusOrg, address, alarmCompany, telephoneNumber} = formData;
    const {addresses} = useSelector((state) => state.address);
    const {telephones} = useSelector((state) => state.telephone);
    const dispatch = useDispatch();
    let addressList = [];
    let telephoneList = [];

    useEffect(() => {
        dispatch(getAllAddresses());
        dispatch(getAllTelephones());
    }, [dispatch]);
    addressList = addresses;
    telephoneList = telephones;

    const onChange = (e) => {
        if(e.target.name === "telephoneNumber"){
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
            if(e.target.value.length > 1){
                console.log(e.target.value);
                dispatch(resetTelephone());
                dispatch(searchTelephone({query: e.target.value}));
                console.log(telephones);
            }else{
                dispatch(getAllTelephones());
            }
        }
        else if(e.target.name === 'address'){
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
        }else{
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
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
            telephoneNumber: value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createBusOrg(formData));
        toast.success(`Successfuly created Business or Organization`);
        setFormData({
            owner: '',
            name: '',
            typeOfBusOrg: '',
            address: '',
            alarmCompany: '',
            telephoneNumber: ''
        })
        console.log(formData);
    }

    const clearFields = () => {
        setFormData({
            owner: '',
            name: '',
            typeOfBusOrg: '',
            address: '',
            alarmCompany: '',
            telephoneNumber: ''
        })
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Business / Organization</h3>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner<br/></div>
                            <input className="DFUniversalFields" type="text" name="owner" placeholder="First & Last Name" value={owner} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Business<br/></div>
                            <input className="DFUniversalFields" type="text" name="name" placeholder="Random Incorporated ltd." value={name} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="typeOfBusOrg" placeholder="Convenience Store" value={typeOfBusOrg} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label style={{position: 'relative'}}>
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

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Alarm Company<br/></div>
                            <input className="DFUniversalFields" type="text" name="alarmCompany" placeholder="Telus Security"  value={alarmCompany} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input onBlur={() => setShowListTelephone(false)} onFocus={() => setShowListTelephone(true)} className="DFUniversalFields" type="text" name="telephoneNumber" placeholder="(000) 000-0000" value={telephoneNumber} onChange={onChange}/>
                            {
                                showListTelephone && 
                                    <ul style={{position: 'absolute', boxShadow: '5px 10px 10px grey', backgroundColor: 'lightgrey', listStyle: 'none', maxHeight: '100px', overflowY: 'scroll', padding: '0.5rem 1rem', borderRadius: '10px'}}>
                                        {
                                            telephoneList.map((item) => <li onClick={() => onSelectTelephone(item.telephoneNumber)}>{item.telephoneNumber}</li>)
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

export default MDBusOrg;