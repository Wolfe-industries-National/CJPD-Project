import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFOccurrence = () => {

    return (
        <div>
            <h3>DFOccurrence</h3>
            <div>
                <tr>
                    <td>
                        <label>
                            File No.<br/>
                            <input type="number" id="DFOccurenceCFileNo" name="FileNo" placeholder="00000000"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Person<br/>
                            <input type="select" id="DFOccurenceCPerson" name="Person"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Bus / Org<br/>
                            <input type="select" id="DFOccurenceCBO" name="BO"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Property<br/>
                            <input type="select" id="DFOccurenceCProperty" name="Property"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Vehicle<br/>
                            <input type="select" id="DFOccurenceCVehicle" name="Vehicle"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Telephone<br/>
                            <input type="select" id="DFOccurenceCTelephone" name="Telephone"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Officer / Unit<br/>
                            <input type="select" id="DFOccurenceCOU" name="OU"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Address<br/>
                            <input type="select" id="DFOccurenceCAddress" name="Address"/>
                        </label>
                    </td>
                </tr>
            </div>
        </div>
    )
}

export default DFOccurrence;