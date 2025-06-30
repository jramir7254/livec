import './CurriculumDetailsPage.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

import { UserContext } from '@context/UserProvider';
import { useContext, useState } from 'react';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { zoomPlugin } from '@react-pdf-viewer/zoom';                          

import Breadcrumbs from '@components/BreadCrumbs';
import TableOfContents from './TableOfContents.jsx';
import SuggestionBox from '@components/SuggestionBox';


const pdfjsVersion = "3.11.174";


export default function CurriculumDetailsPage({ selectedCurriculum }) {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { user } = useContext(UserContext)
    const [open, setOpen] = useState(false)

    const { jumpToPage } = pageNavigationPluginInstance;

    const zoomPluginInstance = zoomPlugin({
        defaultScale: 0.85,
    });

    const { zoomTo } = zoomPluginInstance;


    return (
        <div className="details-page">
            <aside className="toc-sidebar">
                <div className='breadcrumbs'>
                    <Breadcrumbs />
                </div>

                <h1 className="curricula-heading">
                    {selectedCurriculum || sessionStorage.getItem('curriculum')}
                    <hr />
                </h1>

                <TableOfContents jumpToPage={jumpToPage} />
            </aside>

            <div className="flex col pdf-container">

                <div className="pdf-container-header">
                    <a href="/CS2023.pdf" download className="download-button">
                        Download the  {selectedCurriculum || sessionStorage.getItem('curriculum')} Curriculum
                    </a>
                    {user && <button onClick={() => setOpen(!open)}>Suggest</button>}
                    <SuggestionBox open={open} />
                </div>

                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`} >
                    <Viewer
                        fileUrl="/CS2023.pdf"
                        plugins={[pageNavigationPluginInstance, zoomPluginInstance]}
                    // onDocumentLoad={handleDocumentLoad}
                    />
                </Worker>
            </div>
        </div>
    );
}
