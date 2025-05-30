// Accordion.js
import React, { useState, useRef, useEffect } from 'react';
import './Accordion.css';

const AccordionItem = ({ title, content, isOpen, isRestricted, onClick }) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `fit-content` : '0px');
        }
    }, [isOpen]);

    return (
        <div className={`accordion-item ${isRestricted && 'disabled'}`}>
            <div className="accordion-title" onClick={onClick}>
                {title}
            </div>
            <div
                ref={contentRef}
                className={`accordion-content ${isOpen ? 'open' : ''}`}
                style={{ maxHeight }}
            >
                <div>{content}</div>
            </div>
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
         
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    isRestricted={item.restricted}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
