import React from 'react';
import {Viewer, Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const WitnessStatement = () => {

    const newPlugins = defaultLayoutPlugin();

    return (
        <div className="DFUniversalContainer">
            <h3 className="DFUniversalTitle">Witness Statement</h3>
            <div style={{width: '100%', height: '100vh'}}>
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
                    <Viewer fileUrl={'/formsPDF/Incident_Report_Updated.pdf'} plugins={[newPlugins]} />
                </Worker>
            </div>
        </div>
    )

}

export default WitnessStatement