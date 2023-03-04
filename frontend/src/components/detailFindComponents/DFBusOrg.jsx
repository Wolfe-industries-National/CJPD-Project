import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const DFBusOrg = () => {

    return (
        <div>
            <h3>DFBusOrg</h3>
            <div>
                <tr>
                    <td>
                        <label>
                            Name of Owner<br/>
                            <input type="text" id="DFBusOrgCOwnerName" name="OwnerName" placeholder="John Boyega"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Business Name<br/>
                            <input type="text" id="DFBusOrgCBusinessName" name="BusinessName" placeholder="Random Industries"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Business Type<br/>
                            <input type="text" id="DFBusOrgCBusinessType" name="BusinessType" placeholder="Convenience Store"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Address<br/>
                            <input type="select" id="DFBusOrgCAddress" name="Address"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Alarm Company
                            <input type="text" id="DFBusOrgCAlarmCompany" name="AlarmCompany" placeholder="Ex. Vivint"/>
                        </label>
                    </td>
                    <td>
                        <label>
                            Weight
                            <input type="text" id="DFBusOrgCWeight" name="Weight" placeholder="Ex. 142 (Weight in Pounds)"/>
                        </label>
                    </td>
                </tr>
            </div>
        </div>
    )
}

export default DFBusOrg;