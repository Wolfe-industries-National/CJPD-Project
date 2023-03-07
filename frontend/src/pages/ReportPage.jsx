import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import ConsenttoSearch from "../components/formComponenets/ConsenttoSearch";
import ExhibitReportandMovementSheet from "../components/formComponenets/ExhibitReportandMovementSheet";
import FISRequest from "../components/formComponenets/FISRequest";
import WitnessStatement from "../components/formComponenets/WitnessStatement";
import ConsentforReleaseofMedicalInformation from "../components/formComponenets/ConsentforReleaseofMedicalInformation";
import ContinuationNarrativeReport from "../components/formComponenets/ContinuationNarrativeReport";
import FamilyViolenceInvestigationReport from "../components/formComponenets/FamilyViolenceInvestigationReport";
import IncidentReport from "../components/formComponenets/IncidentReport";

const ReportPage = () => {

    const {itemForSearch} = useParams();
    const navigate = useNavigate();
    const [rightSidePannel, setRightSidePannel] = useState();

    useEffect(() => {
        if(!itemForSearch){
            navigate('/reportPage/consenttosearch');
        }
        switch (itemForSearch) {
            case 'consenttosearch':
                setRightSidePannel(ConsenttoSearch);
                break;
            case 'exhibitreportandmovementsheet':
                setRightSidePannel(ExhibitReportandMovementSheet);
                break;
            case 'fisrequest':
                setRightSidePannel(FISRequest);
                break;
            case 'witnessstatement':
                setRightSidePannel(WitnessStatement);
                break;
            case 'consentforreleaseofmedicalinformation':
                setRightSidePannel(ConsentforReleaseofMedicalInformation);
                break;
            case 'continuationnarrativereport':
                setRightSidePannel(ContinuationNarrativeReport);
                break;
            case 'familyviolenceinvestigationreport':
                setRightSidePannel(FamilyViolenceInvestigationReport);
                break;
            case 'incidentreport':
                setRightSidePannel(IncidentReport);
                break;
            default:
                setRightSidePannel(ConsenttoSearch);
                break;
        }
    }, [navigate, itemForSearch]);

    return (
        <div className='DFOuterContainer'>
            <div className='DFInnerContainer'>
                <div className='DFLeftColumn'>
                    <p>Select Type of Form:</p><br/>
                    <span><Link className='DFLeftButtons' to='../reportPage/consenttosearch'>Consent to Search</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../reportPage/exhibitreportandmovementsheet'>Exhibit Report and Movement Sheet</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../reportPage/fisrequest'>FIS Request</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../reportPage/witnessstatement'>Witness Statement</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../reportPage/consentforreleaseofmedicalinformation'>Consent for Release of Medical Information</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../reportPage/continuationnarrativereport'>Continuation Narrative Report</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../reportPage/familyviolenceinvestigationreport'>Family Violence Investigation Report (FVIR)</Link><br/></span>
                    <span><Link className='DFLeftButtons' to='../reportPage/incidentreport'>Incident Report</Link><br/></span>
                </div>

                <div className='DFRightColumn'>
                    {/*Probably somewhere around here*/}
                    {/*it will check for the page and then it will return the correct componenet for that page*/}
                    <div>
                        {rightSidePannel}
                        <div className='DFBottomBar'>
                            <div class='DFBottomBarInnerContainer'>
                                <button class='DFBottomBarButton1'>Clear All</button>
                            </div>
                            <div class='DFBottomBarInnerContainer'>
                                <button class='DFBottomBarButton1'>Save Form</button>
                            </div>
                            <div class='DFBottomBarInnerContainer'>
                                <button class='DFBottomBarButton2'>Download Form</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportPage;