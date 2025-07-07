import React from 'react'

import "./style.css"

import useTabs from '../../hooks/useTabs'

function Component1({name}) {
	return <div>{name}</div>
}

function Component2({email, password}) {
	return <div>{email} {password}</div>
}

export default function HomePage() {
	const { setView, CurrentView } = useTabs({
		cpmnt1: <Component1 name={"john"}/>,
		cpmnt2: <Component2 email={"john@email.com"} password={"dmslkn"}/>,
	})


	return (
		<section className='home'>
			Welcome to LiveC
			<button onClick={() => setView('cpmnt1')}>Set 1</button>
			<button onClick={() => setView('cpmnt2')}>Set 2</button>
			<div className='editor-container2'>
				{CurrentView}
			</div>
		</section>
	)
}

