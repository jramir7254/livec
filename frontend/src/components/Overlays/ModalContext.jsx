// ModalContext.js
import { createContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
export const ModalContext = createContext(undefined);

export default function ModalProvider({ children, onSubmit }) {

    const [showing, setShowing] = useState(false);
    const [view, setView] = useState('default');
    const navigate = useNavigate()

    const submit = useCallback(async () => {
        await onSubmit();
        setView('confirmation')
    }, [onSubmit]);


    const open = () => setShowing(true);


    const close = () => {
        console.log("view:", view)
        if (view === 'confirmation') {
            console.log(true)
            navigate(0)
        }
        setShowing(false)
    };

    const value = {
        showing,
        view,
        open,
        close,
        onSubmit: submit,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}
