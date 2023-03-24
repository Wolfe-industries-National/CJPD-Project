import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {createBusOrg} from "../../features/busOrg/busOrgSlice";
import {searchAddress, getAllAddresses, reset} from "../../features/address/addressSlice";

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

    const {owner, name, typeOfBusOrg, address, alarmCompany, telephoneNumber} = formData;
    const {addresses} = useSelector((state) => state.address);
    const dispatch = useDispatch();
    let addressList = [];

    useEffect(() => {
        dispatch(getAllAddresses());
    }, [dispatch]);
    addressList = addresses;

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
                            <input className="DFUniversalFields" type="text" name="telephoneNumber" placeholder="(000) 000-0000" value={telephoneNumber} onChange={onChange}/>
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

export default MDBusOrg;