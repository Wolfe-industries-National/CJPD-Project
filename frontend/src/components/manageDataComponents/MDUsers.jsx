import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const MDUsers = () => {

    return (
        <div class='DFUniversalContainer'>
            <h3 class='DFUniversalTitle'>Manage Users Form</h3>
            <form class='DFUniversalForm'>

                <div class='DFUniversalRow'>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Lethbridge College Email<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="your.name@lethbridgecollege.ca"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>Name<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder="Name"/>
                        </label>
                    </div>
                    <div class='DFUniversalData'>
                        <label>
                            <div class='DFUniversalInnerTitle'>User Type<br/></div>
                            <input class='DFUniversalFields' type="text" name="name" placeholder=""/>
                        </label>
                    </div>
                </div>
                <div className='DFBottomBar'>
                    <div class='DFBottomBarInnerContainer'>
                        <button class='DFBottomBarButton1'>Clear All</button>
                    </div>
                    <div class='DFBottomBarInnerContainer'>
                        <button class='DFBottomBarButton1'>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MDUsers;