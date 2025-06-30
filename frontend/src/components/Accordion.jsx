// Accordion.js
import { useState, useRef, useEffect } from 'react';
import './Accordion.css';
import { FaChevronDown } from "react-icons/fa6";

const AccordionItem = ({ title, range, content, isOpen, isRestricted = false, onClick }) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `fit-content` : '0px');
        }
    }, [isOpen]);

    return (
        <div className={`accordion-item ${isRestricted && 'disabled'}`}>
            <div className='flex justify-between accordion-title' onClick={onClick}>
                {title} {range.start} - {range.end} {<FaChevronDown  />}
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



const Accordion = ({ item, content }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">

                <AccordionItem
                    key={item.title}
                    range={item.range}
                    title={item.title}
                    page={item.page}
                    content={content}
                    isOpen={openIndex === item.title}
                    onClick={() => handleToggle(item.title)}
                />

        </div>
    );
};

export default Accordion;
