import { COMPUTER_SCIENCE } from '@data'
import { useState, useEffect } from 'react'

export default function KnowledgeUnits({ selectedKnowledgeUnit, selectedKnowledgeArea, onSelect }) {
    const [knowledgeAreaUnits, setKnowledgeAreaUnits] = useState([])

    useEffect(() => {
        const knowledgeArea = COMPUTER_SCIENCE?.knowledgeAreas.find(item => item.slug === selectedKnowledgeArea.slug)
        setKnowledgeAreaUnits(knowledgeArea?.knowledgeUnits)

    }, [selectedKnowledgeArea])


    return (
        <div >
            {knowledgeAreaUnits?.map((item, idx) => (
                <div
                    className={`item ${selectedKnowledgeUnit.name === item.name && 'filled'}`}
                    key={idx * 83}
                    onClick={() => onSelect(item.name, item.slug)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}
