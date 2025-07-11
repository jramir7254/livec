
import { FormContext } from '../FormContext';
import { useContext } from 'react';
import styles from '../Form.module.scss'

export { Editor } from './text-editor/Editor'







export const TextField = ({ className, field, label }) => {
    const key = Object.keys(field)[0];
    const { formData, onFormChange } = useContext(FormContext);

    return (
        <>
            {label && <label htmlFor={key}>{label}</label>}
            <input
                value={formData[key] !== undefined ? formData[key] : (field[key] || '')}
                className={className}
                onChange={(e) => onFormChange(key, e.target.value)}
            />
        </>
    );
};

export const Dropdown = ({ className, field, label, values }) => {
    const key = Object.keys(field)[0];
    const { formData, onFormChange } = useContext(FormContext);

    return (
        <>
            {label && <label htmlFor={key}>{label}</label>}
            <div className={styles.select}>
            <select
                value={formData[key] !== undefined ? formData[key] : (field[key] || '')}
                // className={className}
                onChange={(e) => onFormChange(key, e.target.value)}
            >
                {values.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            </div>
        </>
    );
};

export const TextArea = ({ className = styles['text-area'], field, label }) => {
    const key = Object.keys(field)[0];
    const { formData, onFormChange } = useContext(FormContext);

    return (
        <>
            {label && <label htmlFor={key}>{label}</label>}
            <textarea
                className={className}
                name={key}
                value={formData[key] !== undefined ? formData[key] : (field[key] || '')}
                onChange={(e) => onFormChange(key, e.target.value)}
            />
        </>
    );
};
