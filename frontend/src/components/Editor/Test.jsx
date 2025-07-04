import { useContext } from 'react'
import { EditorContext } from './EditorContext';

export default function Test({ field = {} }) {
    const { formData, onFormChange } = useContext(EditorContext)
    const key = Object.keys(field)[0];

    return (
        <div>
            <label htmlFor={key}>Label</label>
            <input type="text" name={key} value={formData?.key} onChange={(e) => onFormChange(key, e.target.value)} />
        </div>
    )
}
