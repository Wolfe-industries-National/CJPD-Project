import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {detailSearchProperty} from "../../features/property/propertySlice";
import { Link } from "react-router-dom";

const DFProperty = () => {

    const [searchData, setSearchData] = useState({
        owner: '',
        typeOfProperty: '',
        vinOfProperty: '',
        valueOfProperty: '',
        descriptionOfProperty: '',
    });

    const {owner, typeOfProperty, vinOfProperty, valueOfProperty, descriptionOfProperty} = searchData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {properties} = useSelector((state) => state.property);
    let propertyList = [];

    const onChange = (e) => {
        setSearchData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(detailSearchProperty(searchData));
        propertyList = properties;
        console.log(propertyList);
    }

    const clearFields = () => {
        setSearchData({
            owner: '',
            typeOfProperty: '',
            vinOfProperty: '',
            valueOfProperty: '',
            descriptionOfProperty: '',
        })
    }

    return (
        <div className="DFUniversalContainer">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
                <h3 className="DFUniversalTitle" style={{marginBottom: 0}}>Detailed Find Property</h3>
                <div className="DFBottomBarInnerContainer">
                    <Link className="DFBottomBarButton2" to='/fastFind/property'>Switch to Fast Find</Link>
                </div>
            </div>
            <form className="DFUniversalForm" onSubmit={onSubmit}>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Type<br/></div>
                            <input className="DFUniversalFields" type="text" name="typeOfProperty" placeholder="Necklace, Car, Etc." value={typeOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Owner<br/></div>
                            <input className="DFUniversalFields" type="text" name="owner" placeholder="First & Last Name" value={owner} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Serial Number / Vehicle Identification Number<br/></div>
                            <input className="DFUniversalFields" type="text" name="vinOfProperty" placeholder="1234567" value={vinOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                    <div className="DFUniversalData">
                        <label>
                            <div className="DFUniversalInnerTitle">Value<br/></div>
                            <input className="DFUniversalFields" type="number" name="valueOfProperty" placeholder="$123" value={valueOfProperty} onChange={onChange}/>
                        </label>
                    </div>
                </div>
            </form>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={clearFields}>Clear All</button>
                </div>
                <div className="DFBottomBarInnerContainer">
                    <button className="DFBottomBarButton1" onClick={onSubmit}>Find Now</button>
                </div>
            </div>

            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Type<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Owner<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Serial Number / Vehicle Identification Number<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Value<br/></div>
                    </div>
                </div>
                {
                    properties.map((item) => <div className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/property/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.typeOfProperty ? item.typeOfProperty : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner ? item.owner : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.vinOfProperty ? item.vinOfProperty : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.valueOfProperty ? item.valueOfProperty : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default DFProperty;