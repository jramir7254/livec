import { createContext } from "react";
import useForm from '@hooks/useForm'

export const EditorContext = createContext()


export default function EditorProvider({ children, defaultValues = {}}) {
    const { formData, onFormChange, resetForm } = useForm(defaultValues)


    return (
        <EditorContext.Provider value={{formData, onFormChange, resetForm}}>
            {children}
        </EditorContext.Provider>
    )
}
