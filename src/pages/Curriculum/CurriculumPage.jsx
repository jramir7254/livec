
import { CURRICULA } from '@data'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import './CurriculumPage.css'





export default function CurriculumPage({ setSelectedCurriculum }) {
	const navigate = useNavigate();

	const handleClick = (curriculum, slug) => {
		sessionStorage.setItem('curriculum', curriculum)
		setSelectedCurriculum(curriculum)
		navigate(`/curriculum/${slug}`)
	}

	return (
		<div>
			<h1 className='curricula-page__heading'>

				<button className='back-bttn' onClick={() => window.history.back()}>
					<IoIosArrowBack size={'auto'} color='#056da1' />
				</button>

				Choose a curriculum</h1>
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
