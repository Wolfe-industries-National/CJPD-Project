import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {createOfficerUnit} from "../../features/officerUnit/officerUnitSlice";

const MDOfficerUnit = () => {

    const [formData, setFormData] = useState({
        name: '',
        regimentalNumber: '',
        rank: '',
        unit: ''
    })

    const {name, regimentalNumber, rank, unit} = formData;

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(name !== ''){
            dispatch(createOfficerUnit(formData));
            toast.success(`Successfuly created ${name}`);
            setFormData({
                name: '',
                regimentalNumber: '',
                rank: '',
                unit: ''
            })
        }else{
            toast.error('To create a officer unit, please add a name')
        }
        console.log(formData);
    }

    const clearFields = () => {
        setFormData({
            name: '',
            regimentalNumber: '',
            rank: '',
            unit: ''
        })
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Officer / Unit</h3>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Name<br/></div>
                            <input className="DFUniversalFields" type="text" name="name" value={name} placeholder="First & Last Name"  onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Regimental Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="regimentalNumber" value={regimentalNumber} placeholder="123456"  onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Rank<br/></div>
                            <input className="DFUniversalFields" type="text" name="rank" placeholder="Captain" value={rank} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Unit<br/></div>
                            <input className="DFUniversalFields" type="number" name="unit" placeholder="00" value={unit} onChange={onChange}/>
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

export default MDOfficerUnit;