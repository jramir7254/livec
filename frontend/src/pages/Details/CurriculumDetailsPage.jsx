import './CurriculumDetailsPage.scss';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import Page from './Page.jsx';
import { UserContext } from '@context/UserProvider';
import { useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import remarkMath from 'remark-math';

import Breadcrumbs from '@components/BreadCrumbs';
import TableOfContents from './TableOfContents.jsx';
import SuggestionBox from '@components/SuggestionBox';

import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // 👈 Required for KaTeX styles!

const pdfjsVersion = "3.11.174";
import toc from '@assets/cs_toc.json'

export default function CurriculumDetailsPage({ selectedCurriculum }) {
    const { user } = useContext(UserContext)
    const [pageContent, setPageContent] = useState(toc[0]?.markdown_heading + toc[0]?.markdown_body)
    const [sectionId, setSectionId] = useState(toc[0]?.id)

    const text = toc[0]?.units[0]?.markdown_heading + toc[0]?.units[0]?.markdown_body


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


                <TableOfContents jumpToPage={setPageContent} setSectionId={setSectionId} tableOfContents={toc} />

            </aside>

            <div className="flex col pdf-container">
                <Page text={pageContent} >
                    <hr style={{color: 'black', width: '100%'}}/>
                    <SuggestionBox sectionId={sectionId}/>
                </Page>
            </div>
        </div>
    );
}



const SideBar = ({ children }) => {
    return (
        <aside>
            {children}
        </aside>
    )
}

    // const { zoomTo } = zoomPluginInstance;

    // const pageNavigationPluginInstance = pageNavigationPlugin();

// const [open, setOpen] = useState(false)


// const { jumpToPage } = pageNavigationPluginInstance;

// const zoomPluginInstance = zoomPlugin({
//     defaultScale: 0.85,
// });

// const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;


// const onDocumentLoad = () => {
//     zoomTo(0.85)
// }



{/* <a href="/CS2023.pdf" download className="download-button">
                        Download the  {selectedCurriculum || sessionStorage.getItem('curriculum')} Curriculum
                    </a> */}
{/* {user && <button onClick={() => setOpen(!open)}>Suggest</button>} */ }
{/* <SuggestionBox open={open} /> */ }


{/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`} >
                  <ZoomInButton/>
                    <Viewer
                        fileUrl="/CS2023.pdf"
                        plugins={[pageNavigationPluginInstance, zoomPluginInstance]}
                    onDocumentLoad={onDocumentLoad}
                    />
                                        <ZoomInButton/>

                </Worker> */}