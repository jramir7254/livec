import React, { useMemo, useContext } from 'react'
import FormProvider, { FormContext } from './FormContext';
import ModalProvider from '../Overlays/ModalContext';
import { ModalContext } from '../Overlays/ModalContext';
import styles from './Form.module.scss'


const buildDefaultValues = (children) => {
    React.Children.toArray(children).reduce((acc, child) => {
        const val = child.props.val;

        if (val && typeof val === "object") {
            const entries = Object.entries(val);
            if (entries.length === 1) {
                const [key, value] = entries[0];
                acc[key] = value;
            }
        }

        return acc;
    }, {});
}



export function Form({ className = styles.form, children }) {
    const defaultValues = useMemo(() => buildDefaultValues(children), [children])

    if (!children || !children.length) return <p>No Children</p>

    return (
        <FormProvider defaultValues={defaultValues}>
            <form className={className}>
                {children}
            </form>
        </FormProvider>
    )
}


export const SubmitButton = ({ children, onSubmit = () => { }, text='Submit'}) => {
    const { formData } = useContext(FormContext);
    const hasModal = React.Children.count(children) > 0;

    if (hasModal) {
        return (
            <ModalProvider onSubmit={() => onSubmit(formData)}>
                <SubmitButtonWithModal text={text}>{children}</SubmitButtonWithModal>
            </ModalProvider>
        );
    }

    return (
        <button type="button" onClick={() => onSubmit(formData)}>{text}</button>
    );
};



function SubmitButtonWithModal({ children, text }) {
    const { open } = useContext(ModalContext);

    return (
        <>
            <button type="button" onClick={open}>{text}</button>
            {children}
        </>
    );
}











