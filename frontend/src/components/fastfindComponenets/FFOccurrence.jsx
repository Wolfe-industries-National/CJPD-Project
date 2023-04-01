import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {searchOccurrence, getAllOccurrence, reset} from "../../features/occurrence/occurrenceSlice";
import { Link } from "react-router-dom";

const FFOccurrence = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {occurrences} = useSelector((state) => state.occurrence);
    let occurrenceList = [];

    useEffect(() => {
        dispatch(getAllOccurrence());
    }, [dispatch]);
    occurrenceList = occurrences;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(reset());
            dispatch(searchOccurrence({query: e.target.value}));
            console.log(occurrences);
        }else{
            dispatch(getAllOccurrence());
        }
    }

    return (
        <div >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Occurrence</h3>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="File Number" onChange={onChange}/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">File Number<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Description<br/></div>
                    </div>
                </div>
                {
                    occurrenceList.map((item) => <div className="DFUniversalRow" onClick={() => navigate(`/queryResultPage/occurrence/${item._id}`)}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.fileNumber}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.summary}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FFOccurrence