import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchTelephone, getAllTelephones, resetTelephone} from "../../features/telephone/telephoneSlice";
import { Link } from "react-router-dom";

const FFTelephone = () => {

    const dispatch = useDispatch();
    const {telephones} = useSelector((state) => state.telephone);
    let telephoneList = [];

    useEffect(() => {
        dispatch(getAllTelephones());
    }, [dispatch]);
    telephoneList = telephones;

    const onChange = (e) => {
        if(e.target.value.length > 1){
            console.log(e.target.value);
            dispatch(resetTelephone());
            dispatch(searchTelephone({query: e.target.value}));
            console.log(telephones);
        }else{
            dispatch(getAllTelephones());
        }
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="FFUniversalTitle">Fast Find Telephone</h3>
            </div>
            <label>
                <input className="DFUniversalFields" type="text" name="" placeholder="Telephone" onChange={onChange}/>
            </label>
            <div className="FFResultsContainer">
                <div className="DFUniversalRow">
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Telephone<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Owner<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">Type<br/></div>
                    </div>
                    <div className="DFUniversalData">
                        <div className="FFUniversalInnerTitle">DBID<br/></div>
                    </div>
                </div>
                {
                    telephoneList.map((item, index) => <div className="DFUniversalRow" style={{ backgroundColor: index%2===0 && 'lightblue' }}>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.telephoneNumber ? item.telephoneNumber : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.owner ? item.owner : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.typeOfTelephone ? item.typeOfTelephone : ''}<br/></div>
                        </div>
                        <div className="DFUniversalData">
                            <div className="FFUniversalInnerTitle">{item.telephoneDBID ? item.telephoneDBID : ''}<br/></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FFTelephone