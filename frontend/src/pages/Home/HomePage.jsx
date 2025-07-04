import React from 'react'
// import Editor from '../../components/Editor'
// import { EditorGroup, SubmitButton } from '@components/Editor/EditorGroup'
import Test from '../../components/Editor/Test'
import useForm from '@hooks/useForm'
import "./style.css"

const defaultVals = {
	var1: '',
	var2: ''
}

export default function HomePage() {
	return (
		<section className='home'>Welcom to LiveC

			<div className='editor-container2'>
				{/* <EditorGroup>
					<Test field={{ val1: '' }} />
					<Test field={{ val2: '' }} />
										<Test field={{ val3: '' }} />
					<SubmitButton />
				</EditorGroup> */}

				{/* <Editor/> */}
			</div>
		</section>
	)
}
