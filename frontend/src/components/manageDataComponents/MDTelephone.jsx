import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {createTelephone} from "../../features/telephone/telephoneSlice";

const MDTelephone = () => {

    const [formData, setFormData] = useState({
        owner: '',
        typeOfTelephone: '',
        telephoneNumber: ''
    })

    const {owner, typeOfTelephone, telephoneNumber} = formData;

    const dispatch = useDispatch();
    // const {telephone, isSuccess, isError} = useSelector((state) => state.telephone);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(owner !== '' || typeOfTelephone !== '' || telephoneNumber !== ''){
            dispatch(createTelephone(formData));
            toast.success(`Successfuly created ${telephoneNumber}`);
            setFormData({
                owner: '',
                typeOfTelephone: '',
                telephoneNumber: ''
            })
            console.log(formData);
        }else {
            toast.error('Cannot create empty Telephone')
        }
    }

    const clearFields = () => {
        setFormData({
            owner: '',
            typeOfTelephone: '',
            telephoneNumber: ''
        })
    }

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Telephone</h3>
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
                            <div className="DFUniversalInnerTitle">Telephone Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="typeOfTelephone" value={typeOfTelephone} placeholder="Mobile Phone" onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="text" name="telephoneNumber" value={telephoneNumber} placeholder="000-000-0000" onChange={onChange}/>
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

export default MDTelephone;