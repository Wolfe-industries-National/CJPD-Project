import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTelephone} from "../../features/telephone/telephoneSlice";

const MDTelephone = () => {

    const [formData, setFormData] = useState({
        owner: '',
        typeOfTelephone: '',
        telephoneNumber: ''
    })
    const [successMessage, setSuccessMessage] = useState('');

    const { telephoneNumber} = formData;

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
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Manage Telephone</h3>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner<br/></div>
                            <input className="DFUniversalFields" type="text" name="owner" placeholder="First & Last Name" onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="typeOfTelephone" placeholder="Honda" onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Telephone<br/></div>
                            <input className="DFUniversalFields" type="text" name="telephoneNumber" placeholder="Civic" onChange={onChange}/>
                        </label>
                    </div>
                </div>
                <div className="DFBottomBar">
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Clear All</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Update</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton1">Delete</button>
                    </div>
                    <div className="DFBottomBarInnerContainer">
                        <button className="DFBottomBarButton2">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MDTelephone;