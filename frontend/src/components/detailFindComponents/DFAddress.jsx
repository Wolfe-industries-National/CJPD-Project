import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFAddress = () => {

    return (
        <div>
            <h3>DFAddress</h3>
            <div>
                <tr>
                    <td>
                        <label>
                            Name
                            <input type="text" id="fname" name="fname" value="John"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            D.O.B.
                            <input type="text" id="fname" name="fname" value="John"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Telephone
                            <input type="text" id="fname" name="fname" value="John"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Address
                            <input type="text" id="fname" name="fname" value="John"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            FPS
                            <input type="text" id="fname" name="fname" value="John"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Height
                            <input type="text" id="fname" name="fname" value="John"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Weight
                            <input type="text" id="fname" name="fname" value="John"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Aliases
                            <input type="text" id="fname" name="fname" value="John"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </div>
        </div>
    )
}

export default DFAddress;