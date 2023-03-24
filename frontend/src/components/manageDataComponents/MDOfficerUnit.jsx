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
        dispatch(createOfficerUnit(formData));
        toast.success(`Successfuly created ${name}`);
        setFormData({
            name: '',
            regimentalNumber: '',
            rank: '',
            unit: ''
        })
        console.log(formData);
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

export default MDOfficerUnit;