import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createOfficerUnit} from "../../features/officerUnit/officerUnitSlice";


const MDOfficerUnit = () => {

    const [formData, setFormData] = useState({
        name: '',
        regimentalNumber: '',
        rank: '',
        unit: ''
    })
    const [successMessage, setSuccessMessage] = useState('');

    const {name, regimentalNumber, rank, unit} = formData;

    const dispatch = useDispatch();
    const {officerUnit, isSuccess, isError} = useSelector((state) => state.officerUnit);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createOfficerUnit(formData));
        setSuccessMessage(`Successfuly created ${name}`);
        setFormData({
            name: '',
            regimentalNumber: '',
            rank: '',
            unit: ''
        })
        console.log(formData);
    }

    return (
        <div className='DFUniversalContainer'>
            <h3 className='DFUniversalTitle'>Manage Officer / Unit Form</h3>
            <form className='DFUniversalForm' onSubmit={onSubmit}>

                <div className='DFUniversalRow'>
                    <div className='DFUniversalData'>
                        <label>
                            <div className='DFUniversalInnerTitle'>Name<br/></div>
                            <input className='DFUniversalFields' type="text" name="name" placeholder="First Name & Last Name" onChange={onChange}/>
                        </label>
                    </div>
                    <div className='DFUniversalData'>
                        <label>
                            <div className='DFUniversalInnerTitle'>Regimental Number<br/></div>
                            <input className='DFUniversalFields' type="text" name="regimentalNumber" placeholder="Honda" onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className='DFUniversalRow'>
                    <div className='DFUniversalData'>
                        <label>
                            <div className='DFUniversalInnerTitle'>Rank<br/></div>
                            <input className='DFUniversalFields' type="text" name="rank" placeholder="Civic" onChange={onChange}/>
                        </label>
                    </div>
                    <div className='DFUniversalData'>
                        <label>
                            <div className='DFUniversalInnerTitle'>Unit<br/></div>
                            <input className='DFUniversalFields' type="text" name="unit" placeholder="Civic" onChange={onChange}/>
                        </label>
                    </div>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default MDOfficerUnit;