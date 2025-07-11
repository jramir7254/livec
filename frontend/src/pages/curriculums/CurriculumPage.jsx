import './CurriculumPage.scss'

import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

import Breadcrumbs from '@components/BreadCrumbs';
import { CURRICULA } from '@data'


/**
 * Page that displays the eight different curriculums which
 * are retrieved from the Curricula variable from /src/data
 * 
**/

export default function CurriculumPage() {
	const navigate = useNavigate();

	// TODO: extract all storage to seperate util handler
	const handleClick = (curriculum, slug) => {
		sessionStorage.setItem('curriculum', curriculum)
		sessionStorage.setItem('curriculumSlug', slug)
		navigate(`/curriculums/${slug}/details`)
	}

	return (
		<div className='curricula-page'>
			<Breadcrumbs/>
			<h1 className='curricula-page__heading'>Choose a curriculum</h1>
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
