import { useState, useEffect } from 'react'
import Accordion from '@components/Accordion'
import KnowledgeAreas from './KnowledgeAreas';
import KnowledgeUnits from './KnowledgeUnits';

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
        <div>
            <h1 className='curricula-page__heading'>{selectedCurriculum} {knowledgeArea.name && '| ' + knowledgeArea.name}</h1>
            <Accordion items={DETAILS} />
        </div>
    )
}
