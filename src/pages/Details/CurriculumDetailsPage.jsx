import { useState, useEffect } from 'react'
import Accordion from '@components/Accordion'
import KnowledgeAreas from './KnowledgeAreas';
import KnowledgeUnits from './KnowledgeUnits';
import { IoIosArrowBack } from "react-icons/io";
import './CurriculumDetailsPage.css'

export default function CurriculumDetailsPage({ selectedCurriculum }) {
    const [knowledgeArea, setKnowledgeArea] = useState({
        name: '',
        slug: '',
    })

    const [knowledgeUnit, setKnowledgeUnit] = useState({
        name: '',
        slug: ''
    })

    useEffect(() => {
        console.log("Selected Knowledge Area:", knowledgeArea)
        console.log("Selected Knowledge Unit:", knowledgeUnit)
    }, [knowledgeArea, knowledgeUnit])


    const onKnowledgeAreaChange = (knowledgeArea, slug) => {
        setKnowledgeArea({
            name: knowledgeArea,
            slug: slug
        })
    }

    const onKnowledgeUnitChange = (knowledgeUnit, slug) => {
        setKnowledgeUnit({
            name: knowledgeUnit,
            slug: slug
        })
    }



    const DETAILS = [
        {
            title: 'Knowledge Areas',
            content:
                <KnowledgeAreas
                    selectedKnowledgeArea={knowledgeArea}
                    onSelect={onKnowledgeAreaChange}
                />,
            restricted: false
        },
        {
            title: 'Knowledge Units',
            content:
                <KnowledgeUnits
                    selectedKnowledgeUnit={knowledgeUnit}
                    selectedKnowledgeArea={knowledgeArea}
                    onSelect={onKnowledgeUnitChange}
                />,
            restricted: knowledgeArea.name === ''
        },
        {
            title: 'Learning Outcomes',
            content: 'Content for section 3.',
            restricted: knowledgeUnit.name === ''
        },
    ];


    return (
        <div className='details_page'>
            <h1 className='curricula-page__heading'>

                <button className='back-bttn' onClick={() => window.history.back()}>
                    <IoIosArrowBack size={'auto'} color='#056da1' />
                </button>

                {selectedCurriculum || sessionStorage.getItem('curriculum')}
                <span className='ka'>{knowledgeArea.name && ' | ' + knowledgeArea.name}</span>
            </h1>
            <Accordion items={DETAILS} />
        </div>
    )
}
