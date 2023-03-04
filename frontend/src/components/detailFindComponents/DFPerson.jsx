import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFPerson = () => {

    return (
        <div>
            <h3>DFPerson</h3>
            <div>
                <tr>
                    <td>
                        <label>
                            Name<br/>
                            <input type="text" id="DFPersonCName" name="Name" placeholder="FirstName LastName"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            D.O.B.<br/>
                            <input type="date" id="DFPersonCDOB" name="DOB"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Telephone<br/>
                            <input type="tel" id="DFPersonCTelephone" name="Telephone" placeholder="(000) 000-0000"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Address<br/>
                            <input type="select" id="DFPersonCAddress" name="Address"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            FPS<br/>
                            <input type="text" id="DFPersonCFPS" name="FPS" placeholder="A000000"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Height<br/>
                            <input type="text" id="DFPersonCHeight" name="Height" placeholder="000 cm"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Weight<br/>
                            <input type="text" id="DFPersonCWeight" name="Weight" placeholder="000 lbs."/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Aliases<br/>
                            <input type="text" id="DFPersonCAliases" name="Aliases" placeholder="One Eyes Willy"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Associated Vehicles<br/>
                            <input type="select" id="DFPersonCAV" name="AV"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Associates<br/>
                            <input type="select" id="DFPersonCAssociates" name="Associates"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Flags<br/>
                            <input type="select" id="DFPersonCFlags" name="Flags"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Tattoos / Distinguishing Feature(s)<br/>
                            <input type="text" id="DFPersonCTDF" name="TDF" value="Scar on left cheek"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Hair Color<br/>
                            <input type="text" id="DFPersonCHairColor" name="HairColor" value="Black"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Eye Color<br/>
                            <input type="text" id="DFPersonCEyeColor" name="EyeColor" value="Blue"/>
                        </label>
                    </td>
                </tr>
            </div>
        </div>
    )
}

export default DFPerson;