import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFProperty = () => {

    return (
        <div>
            <h3>DFProperty</h3>
            <div>
                <tr>
                    <td>
                        <label>
                            Property Type
                            <input type="text" id="DFPropertyCPropertyType" name="PropertyType" placeholder="Ex. Car"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Owner
                            <input type="text" id="DFPropertyCOwner" name="Owner" placeholder="Emily Blunt"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Serial Number / VIN
                            <input type="text" id="DFPropertyCSNVIN" name="fname" placeholder="4Y1SL65848Z411439"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Property Value
                            <input type="text" id="DFPropertyCOPropertyValue" name="fname" placeholder="Ex. $2000"/>
                        </label>
                    </td>
                </tr>
            </div>
        </div>
    )
}

export default DFProperty;