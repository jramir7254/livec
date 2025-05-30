
import { COMPUTER_SCIENCE } from '@data'
import { useEffect, useState } from 'react'


export default function KnowledgeAreas({ selectedKnowledgeArea, onSelect }) {


    return (
        <div>
            {COMPUTER_SCIENCE?.knowledgeAreas.map((item, idx) => (
                <div
                    className={`item ${selectedKnowledgeArea.name === item.name && 'filled'}`}
                    key={item.slug}
                    onClick={() => onSelect(item.name, item.slug)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}
