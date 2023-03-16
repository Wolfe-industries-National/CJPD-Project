import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const IncidentReport = () => {

    const [formData, setFormData] = useState({
        agency: '',
        fileNumber: '',
        reportedDate: '',
        time: '',
        occurrenceBetweenDate: '',
        natureOfEvent: '',
        complaintTakenBy: '',
        unitsAssisting: '',
        ambulance: '',
        fire: '',
        other: '',
        badgeNumber: '',
        investigatorName: '',
        zone: '',
        unitWatch: '',
        vehicleStatus: '',
        sex: '',
        pho: ''
    });
    const {agency, fileNumber, reportedDate, time, occurrenceBetweenDate, natureOfEvent, complaintTakenBy,
    unitsAssisting, ambulance, badgeNumber, fire, investigatorName, zone, unitWatch, other, vehicleStatus, sex, pho} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Incident Report</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Originating Agency<br/></div>
                            <input class='DFUniversalFields' type="text" name="agency" placeholder="" value={agency} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="fileNumber" placeholder="" value={fileNumber} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Reported Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="reportedDate" placeholder="yyyy-mm-dd" value={reportedDate} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Time<br/></div>
                            <input class='DFUniversalFields' type="time" name="time" placeholder="hh:mm" value={time} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Incident Occurred Between<br/></div>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Start Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="reportedDate" placeholder="yyyy-mm-dd" value={reportedDate} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Start Time<br/></div>
                            <input class='DFUniversalFields' type="time" name="time" placeholder="hh:mm" value={time} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>End Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="occurrenceBetweenDate" placeholder="yyyy-mm-dd" value={occurrenceBetweenDate} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>End Time<br/></div>
                            <input class='DFUniversalFields' type="time" name="time" placeholder="hh:mm" value={time} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Nature of Event<br/></div>
                            <input class='DFUniversalFields' type="text" name="natureOfEvent" placeholder="" value={natureOfEvent} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Complaint taken by<br/></div>
                            <input class='DFUniversalFields' type="text" name="complaintTakenBy" placeholder="" value={complaintTakenBy} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Units Assisting<br/></div>
                            <input class='DFUniversalFields' type="text" name="unitsAssisting" placeholder="" value={unitsAssisting} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Ambulance<br/></div>
                            <input class='DFUniversalFields' type="text" name="ambulance" placeholder="" value={ambulance} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Fire<br/></div>
                            <input class='DFUniversalFields' type="date" name="fire" placeholder="" value={fire} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other<br/></div>
                            <input class='DFUniversalFields' type="text" name="other" placeholder="" value={other} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                            <input class='DFUniversalFields' type="text" name="location" placeholder="" onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Badge Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="badgeNumber" placeholder="" value={badgeNumber} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator<br/></div>
                            <input class='DFUniversalFields' type="text" name="investigatorName" placeholder="" value={investigatorName} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Zone<br/></div>
                            <input class='DFUniversalFields' type="text" name="zone" placeholder="" value={zone} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="unitWatch" placeholder="" value={unitWatch} onChange={onChange}/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Priority<br/></div>
                            <div class='UniversalRadioContainer'>
                                <div class="RadioChoiceContainer">
                                    <input id="IRRadio1" class="UniversalRadioFix" type="radio" name="RC-IR1" value="1"/>
                                    <label for="IRRadio1">1</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="IRRadio2" class="UniversalRadioFix" type="radio" name="RC-IR1" value="2"/>
                                    <label for="IRRadio2">2</label>
                                </div>
                                <div class="RadioChoiceContainer">
                                    <input id="IRRadio3" class="UniversalRadioFix" type="radio" name="RC-IR1" value="3"/>
                                    <label for="IRRadio3">3</label>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>SUB<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>BUS<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="vehicleStatus" placeholder="" value={vehicleStatus} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="aNum" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Person / Business<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="unitWatch" placeholder="" value={unitWatch} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.1<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.2<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Sex<br/></div>
                            <input class='DFUniversalFields' type="text" name="sex " placeholder="" value={sex} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Home Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="phoneNumber" placeholder="" value={pho} onChange={onChange}/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Address same as Location?<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR2"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div>
                                <div class='DFUniversalInnerTitle'>Address (if different from location) (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                                <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                            </div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Age<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Height<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="cm"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Mass<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="lbs"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Hair<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Left Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Right Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Race<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, asian"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Place of Birth<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Drivers License<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>POI<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Photo Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Fingerprint Section (FPS)<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Booking Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Citizenship<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Deformity, Amputation, Tattoo<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Build<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Complexion<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Alias<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Occupation<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Employer<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other Description<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>SUB<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>BUS<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Person / Business<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.1<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.2<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Sex<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Home Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Address same as Location?<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR2"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div>
                                <div class='DFUniversalInnerTitle'>Address (if different from location) (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                                <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                            </div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Age<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Height<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="cm"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Mass<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="lbs"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Hair<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Left Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Right Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Race<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, asian"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Place of Birth<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Drivers License<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>POI<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Photo Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Fingerprint Section (FPS)<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Booking Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Citizenship<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Deformity, Amputation, Tattoo<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Build<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Complexion<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Alias<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Occupation<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Employer<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other Description<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>SUB<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>BUS<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Person / Business<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.1<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.2<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Sex<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Home Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Address same as Location?<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR2"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div>
                                <div class='DFUniversalInnerTitle'>Address (if different from location) (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                                <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                            </div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Age<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Height<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="cm"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Mass<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="lbs"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Hair<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Left Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Right Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Race<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, asian"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Place of Birth<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Drivers License<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>POI<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Photo Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Fingerprint Section (FPS)<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Booking Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Citizenship<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Deformity, Amputation, Tattoo<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Build<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Complexion<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Alias<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Occupation<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Employer<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other Description<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>SUB<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>BUS<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Person / Business<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.1<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.2<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Sex<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Home Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Address same as Location?<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR2"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div>
                                <div class='DFUniversalInnerTitle'>Address (if different from location) (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                                <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                            </div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Age<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Height<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="cm"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Mass<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="lbs"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Hair<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Left Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Right Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Race<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, asian"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Place of Birth<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Drivers License<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>POI<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Photo Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Fingerprint Section (FPS)<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Booking Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Citizenship<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Deformity, Amputation, Tattoo<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Build<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Complexion<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Alias<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Occupation<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Employer<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other Description<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>SUB<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>BUS<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR1"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Person / Business<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.1<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>G.2<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Sex<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Home Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Business Telephone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>
                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='CheckboxInnerTitle'>Address same as Location?<br/></div>
                            <input class='UniversalCheckboxFix' type="checkbox" name="CB-IR2"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div>
                                <div class='DFUniversalInnerTitle'>Address (if different from location) (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                                <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                            </div>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Date of Birth<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Age<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Height<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="cm"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Mass<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="lbs"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Hair<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Left Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Right Eye<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="colour"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Race<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, asian"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Place of Birth<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Drivers License<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>POI<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Photo Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Fingerprint Section (FPS)<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Booking Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Citizenship<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Deformity, Amputation, Tattoo<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Build<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Complexion<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Alias<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Occupation<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Employer<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other Description<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>

                {/* Vehicles Supplement 1 */}

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <h3 class='DFUniversalTitle2'><b>Incident Report - Vehicles Supplement</b><br/></h3>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Badge Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Province<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Make<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Style<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VIN<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VALTAG Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Top Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Bottom Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Estimated Value<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number of Occurences<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>M:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>F:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Interior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Exterior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location of Vehicle<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Disposition<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>


                {/* Vehicles Supplement 1 */}

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Badge Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Province<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Make<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Style<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VIN<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VALTAG Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Top Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Bottom Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Estimated Value<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number of Occurences<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>M:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>F:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Interior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Exterior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location of Vehicle<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Disposition<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>


                {/* Vehicles Supplement 1 */}

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Badge Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Province<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Make<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Style<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VIN<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VALTAG Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Top Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Bottom Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Estimated Value<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number of Occurences<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>M:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>F:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Interior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Exterior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location of Vehicle<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Disposition<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>


                {/* Vehicles Supplement 1 */}

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Badge Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Province<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Make<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Style<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VIN<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VALTAG Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Top Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Bottom Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Estimated Value<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number of Occurences<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>M:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>F:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Interior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Exterior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location of Vehicle<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Disposition<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>


                {/* Vehicles Supplement 1 */}

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Badge Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Investigator<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Status<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>


                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Province<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Licence Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Make<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Model<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Style<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Vehicle Year<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VIN<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>VALTAG Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Top Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Bottom Colour<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Estimated Value<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Number of Occurences<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>M:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>F:<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Interior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Exterior Features<br/></div>
                            <textarea class='UniversalFieldsTB' name=""></textarea>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location of Vehicle<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Disposition<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>
            </form>
            <div className='DFBottomBar'>
                <div className='DFBottomBarInnerContainer'>
                    <button className='DFBottomBarButton1'>Clear All</button>
                </div>
                <div className='DFBottomBarInnerContainer'>
                    <button className='DFBottomBarButton1'>Save Form</button>
                </div>
                <div className='DFBottomBarInnerContainer'>
                    <button className='DFBottomBarButton2'>Download Form</button>
                </div>
            </div>
        </div>
    )
}

export default IncidentReport