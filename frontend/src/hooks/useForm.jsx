import { useEffect, useState } from "react";


export default function useForm({ defaultData }) {
    const [formData, setFormData] = useState(defaultData || {});

    useEffect(() => {
        console.log(formData)
        setFormData(defaultData)
    }, [defaultData])

    const onFormChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const resetForm = () => {
        setFormData({ ...defaultData });
    };

    return { formData, onFormChange, resetForm };
}
