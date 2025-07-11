import styles from './SuggestionBox.module.scss';
import { useNavigate } from 'react-router';
import useSuggestion from '@hooks/useSuggestion';
import { UserContext } from '@context/UserProvider';
import { useContext, useState } from 'react';
import { Form, SubmitButton } from '@components/form';
import { TextArea, TextField } from '@components/form/input';

export default function SuggestionBox({ sectionId }) {
    const { user } = useContext(UserContext)
    const { submit, response, setResponse } = useSuggestion(null);


    const close = () => {
        setResponse(null)
    }


    return (
        <div className={styles['suggestion-box']}>
            {!user && <Placeholder />}
            {(response && response.success === true) && <Success onClose={close} response={response}/>}
            {(response && response.success === false) && <Failure />}
            {(user && !response) && <Default sectionId={sectionId} submit={submit} />}
        </div>
    )


}




const Default = ({ sectionId, submit }) => {
    const discipline = sessionStorage.getItem('curriculumSlug') || 'none'
    return (
        <>
            <h2>Have a thought or suggestion for this section? Fill out the form below.</h2>
            <Form resetOn={[sectionId]}>
                <TextField field={{ title: '' }} label='Enter a brief title explaining your suggestions' />
                <TextArea field={{ text: '' }} label='Enter your suggestion down below' />
                <SubmitButton onSubmit={(formData) => submit({ sectionId, discipline, ...formData })} />
            </Form>
        </>
    )
}





const Placeholder = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/auth')} className='clickable'>
            <h2>Login in or Register to leave a suggestion for this section</h2>


        </div>
    )
}

const Success = ({ response, onClose }) => (
    <div>
        <h2>✅ Success</h2>
        <p>{response?.message}</p>
        {/* Will add close implementation later */}
        <button onClick={onClose}>Close</button>
    </div>
);

const Failure = ({ message }) => (
    <div>
        <h2>❌ Error</h2>
        <p>{message.message || 'Something went wrong.'}</p>
    </div>
);
