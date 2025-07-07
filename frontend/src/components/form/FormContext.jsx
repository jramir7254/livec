import { createContext } from "react";
import useForm from '@hooks/useForm'

export const FormContext = createContext()

export default function FormProvider({ children, defaultValues = {} }) {
    const { formData, onFormChange, resetForm } = useForm(defaultValues)

    return (
        <FormContext.Provider value={{ formData, onFormChange, resetForm }}>
            {children}
        </FormContext.Provider>
    )
}
