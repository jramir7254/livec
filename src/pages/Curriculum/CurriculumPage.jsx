
import { CURRICULA } from '@data'
import { useNavigate } from 'react-router-dom'

import './CurriculumPage.css'





export default function CurriculumPage({ setSelectedCurriculum }) {
	const navigate = useNavigate();

	const handleClick = (curriculum, slug) => {
		setSelectedCurriculum(curriculum)
		navigate(`/curriculum/${slug}`)
	}

	return (
		<div>
			<h1 className='curricula-page__heading'>CurriculumPage</h1>
			<div className='card__grid'>
				{CURRICULA.map((item, indx) => (
					<div key={indx * 13} className='card' onClick={() => handleClick(item.name, item.slug)}>
						<h2 className='card__heading'>{item.name}</h2>
						<p className='card__desc'>{`Explore the ${item.name} curriculum`}</p>
					</div>
				))}
			</div>
		</div>
	)
}
