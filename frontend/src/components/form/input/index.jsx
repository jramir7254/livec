
import { FormContext } from '../FormContext';
import { useContext } from 'react';
import styles from '../Form.module.scss'

export { Editor } from './text-editor/Editor'

export const Text = () => {
    const key = Object.keys(field)[0];

    const { formData, onFormChange } = useContext(FormContext)

    return (
        <input className='ta' onChange={(e) => onFormChange(key, e.target.value)} />
    )
}


export const Dropdown = ({className, field, label, values}) => {
    const key = Object.keys(field)[0];

    const { onFormChange } = useContext(FormContext)
    console.log("vals:", values)
    return (
        <select onChange={(e) => onFormChange(key, e.target.value)}>
            {values.map((item, index) => (
                <option key={index*57} value={item.value}>{item.label}</option>
            ))}
        </select>
    )

}


export const TextArea = ({ className = styles['text-area'], field, label }) => {
    const key = Object.keys(field)[0];
    const { onFormChange } = useContext(FormContext)


    return (
        <>
            {label && <label htmlFor={key}>{label}</label>}
            <textarea
                className={className}
                name={key}
                onChange={(e) => onFormChange(key, e.target.value)} />
        </>
    )
}