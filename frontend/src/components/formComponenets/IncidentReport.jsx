import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const IncidentReport = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Incident Report</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Originating Agency<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>File Number<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Reported Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Time<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="hh:mm"/>
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
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Start Time<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="hh:mm"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>End Date<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder="yyyy-mm-dd"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>End Time<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder="hh:mm"/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Nature of Event<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Complaint taken by<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Units Assisting<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Ambulance<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Fire<br/></div>
                            <input class='DFUniversalFields' type="date" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Other<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Location (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
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
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Zone<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
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
                            <div class='DFUniversalInnerTitle'>Priority<br/></div>
                            1<input class='DFUniversalFields' type="radio" name="" placeholder=""/>
                            2<input class='DFUniversalFields' type="radio" name="" placeholder=""/>
                            3<input class='DFUniversalFields' type="radio" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            SUB<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                            BUS<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
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
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname / Bus, Home<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
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
                            <div class='DFUniversalInnerTitle'>Address (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                            <div>
                                <input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                                <p>Same as LOC, or</p>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. 37"/>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, african-american, asian"/>
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
                            SUB<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                            BUS<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
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
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname / Bus, Home<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
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
                            <div class='DFUniversalInnerTitle'>Address (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                            <div>
                                <input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                                <p>Same as LOC, or</p>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. 37"/>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, african-american, asian"/>
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
                            SUB<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                            BUS<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
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
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname / Bus, Home<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
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
                            <div class='DFUniversalInnerTitle'>Address (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                            <div>
                                <input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                                <p>Same as LOC, or</p>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. 37"/>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, african-american, asian"/>
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
                            SUB<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                            BUS<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
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
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname / Bus, Home<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
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
                            <div class='DFUniversalInnerTitle'>Address (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                            <div>
                                <input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                                <p>Same as LOC, or</p>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. 37"/>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, african-american, asian"/>
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
                            SUB<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                            BUS<input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
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
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Surname / Bus, Home<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Unit / Watch<br/></div>
                            <input class='DFUniversalFields' type="text" name="" placeholder=""/>
                        </label>
                    </div>
                </div>

                <div class='DFUniversalRow'>
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
                            <div class='DFUniversalInnerTitle'>Address (Street Number, Street, Apartment, City, Province, Country, Postal Code)<br/></div>
                            <div>
                                <input class='DFUniversalFields' type="checkbox" name="" placeholder=""/>
                                <p>Same as LOC, or</p>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. 37"/>
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
                            <input class='DFUniversalFields' type="text" name="" placeholder="ex. caucasian, african-american, asian"/>
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
                            <div class='DFUniversalInnerTitle'>Incident Report - Vehicles Supplement<br/></div>
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

                {/* Vehicles Supplement 2 */}

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

                {/* Vehicles Supplement 3 */}

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

                {/* Vehicles Supplement 4 */}

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

                {/* Vehicles Supplement 5 */}

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
        </div>
    )
}

export default IncidentReport