import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


const QRPerson = () => {

    return (
        <div class='QRCContainer'>

            <div class='QRRow'>
                <div class='QRData'>
                    <div class='QRTitle'>Name:</div>
                    <div class='QRResultText'>Billy Bob</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Alias:</div>
                    <div class='QRResultText'>Backyard Butcher</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Sex:</div>
                    <div class='QRResultText'>Male</div>
                </div>
            </div>

            <div class='QRRow'>
                <div class='QRData'>
                    <div class='QRTitle'>Ethnicity:</div>
                    <div class='QRResultText'>Caucasian</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Age:</div>
                    <div class='QRResultText'>43</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Height:</div>
                    <div class='QRResultText'>190 cm</div>
                </div>
            </div>

            <div class='QRRow'>
                <div class='QRData'>
                    <div class='QRTitle'>Weight:</div>
                    <div class='QRResultText'>210 lbs</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Birthday:</div>
                    <div class='QRResultText'>1998/01/03</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Hair Colour:</div>
                    <div class='QRResultText'>Dark Brown</div>
                </div>
            </div>

            <div class='QRRow'>
                <div class='QRData'>
                    <div class='QRTitle'>Eye Colour:</div>
                    <div class='QRResultText'>Blue</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Fingerprint Section:</div>
                    <div class='QRResultText'>A999999</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Other Aliases:</div>
                    <div class='QRResultText'>Beef Bully</div>
                </div>
            </div>

            <div class='QRRow'>
                <div class='QRData'>
                    <div class='QRTitle'>Tattoos:</div>
                    <div class='QRResultText'>Dragon on Neck</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Associates:</div>
                    <div class='QRResultText'>John Wick</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Flags:</div>
                    <div class='QRResultText'>Violent Tendencies</div>
                </div>
            </div>

            <div class='QRRow'>
                <div class='QRData'>
                    <div class='QRTitle'>Phone Number:</div>
                    <div class='QRResultText'>(403) 123-4567)</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Address:</div>
                    <div class='QRResultText'>Randomplace Blvd W, Lethbridge AB, Canada, T1K 6K1</div>
                </div>
                <div class='QRData'>
                    <div class='QRTitle'>Occurrence Number:</div>
                    <div class='QRResultText'>123456789</div>
                </div>
            </div>

        </div>

    )
}

export default QRPerson;