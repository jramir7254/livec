import { useEffect, useState, useCallback } from "react";


export default function useForm({ defaultData = {} }) {
    const [formData, setFormData] = useState(defaultData);

    const onFormChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const resetForm = () => {
        setFormData({...defaultData});
    }

    return { formData, onFormChange, resetForm };
}
