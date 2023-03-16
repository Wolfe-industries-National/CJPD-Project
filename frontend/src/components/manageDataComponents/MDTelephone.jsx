import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createTelephone} from "../../features/telephone/telephoneSlice";


const MDTelephone = () => {

    const [formData, setFormData] = useState({
        owner: '',
        typeOfTelephone: '',
        telephoneNumber: ''
    })
    const [successMessage, setSuccessMessage] = useState('');

    const {owner, typeOfTelephone, telephoneNumber} = formData;

    const dispatch = useDispatch();
    const {telephone, isSuccess, isError} = useSelector((state) => state.telephone);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createTelephone(formData));
        setSuccessMessage(`Successfuly created ${telephoneNumber}`);
        setFormData({
            owner: '',
            typeOfTelephone: '',
            telephoneNumber: ''
        })
        console.log(formData);
    }

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Telephone Form</h3>
            <form class='DFUniversalForm' onSubmit={onSubmit}>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name of Owner<br/></div>
                            <input class='DFUniversalFields' type="text" name="owner" placeholder="First Name & Last Name" onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Telephone Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="typeOfTelephone" placeholder="Honda" onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Telephone Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="telephoneNumber" placeholder="Civic" onChange={onChange}/>
                        </label>
                    </div>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default MDTelephone;