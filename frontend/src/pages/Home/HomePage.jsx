import React from 'react'

import "./style.css"

import useTabs from '../../hooks/useTabs'
import { md } from '../../data/computerScience/knowledgeAreas'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PlainEditor } from '../../components/form/input/text-editor/Editor';

export default function HomePage() {


	return (
		<section className='home'>
			<PlainEditor md={md}/>
		</section>
	)
}


{/* Welcome to LiveC
<button onClick={() => setView('cpmnt1')}>Set 1</button>
<button onClick={() => setView('cpmnt2')}>Set 2</button>
<div className='editor-container2'>
	{CurrentView}
</div> */}