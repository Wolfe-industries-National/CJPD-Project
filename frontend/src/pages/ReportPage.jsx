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
    const [allFastFindPages, setAllFastFindPages] = useState([<ConsenttoSearch/>, <ExhibitReportandMovementSheet/>, <FISRequest/>, <WitnessStatement/>, <ConsentforReleaseofMedicalInformation/>, <ContinuationNarrativeReport/>, <FamilyViolenceInvestigationReport/>, <IncidentReport/>])
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    useEffect(() => {
        if(!itemForSearch){
            navigate('/reportPage/consenttosearch');
        }
        switch (itemForSearch) {
            case 'consenttosearch':
                setCurrentPageIndex(0);
                break;
            case 'exhibitreportandmovementsheet':
                setCurrentPageIndex(1);
                break;
            case 'fisrequest':
                setCurrentPageIndex(2);
                break;
            case 'witnessstatement':
                setCurrentPageIndex(3);
                break;
            case 'consentforreleaseofmedicalinformation':
                setCurrentPageIndex(4);
                break;
            case 'continuationnarrativereport':
                setCurrentPageIndex(5);
                break;
            case 'familyviolenceinvestigationreport':
                setCurrentPageIndex(6);
                break;
            case 'incidentreport':
                setCurrentPageIndex(7);
                break;
            default:
                setCurrentPageIndex(0);
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
                    <div>
                        {allFastFindPages[currentPageIndex]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportPage;