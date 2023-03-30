import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchPerson, getAllPerson, reset} from "../../features/person/personSlice";
import { Link } from "react-router-dom";

const FFPerson = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {people} = useSelector((state) => state.person);
    let personList = [];
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        dispatch(getAllPerson());
    }, [dispatch]);
    personList = people;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(reset());
            dispatch(searchPerson({query: e.target.value}));
            console.log(people);
        }else{
            dispatch(getAllPerson());
        }
    }

    return (
        <div style={{marginBottom: '3rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Person</h3>
                <Link className="DFBottomBarButton2" to='/detailedFind/person'>Switch to Detailed Find</Link>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Person" onChange={onChange}/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Person<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Date of Birth<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Age<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Fingerprint Section<br/></div>
                    </div>
                </div>
                {
                    personList.map((item) => <div className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/person/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.name}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.dateOfBirth.split('T')[0]}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{(currentYear - item.dateOfBirth.split('-')[0])}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.fps}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FFPerson