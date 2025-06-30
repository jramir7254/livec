import './SuggestionBox.css';
import useForm from '@hooks/useForm';
import useSuggestion from '@hooks/useSuggestion';

const defaultData = {
    title: '',
    suggestion: '',
    discipline: sessionStorage.getItem('curriculumSlug')
};

export default function SuggestionBox({ open }) {
    const { submit, response, setResponse } = useSuggestion(null);
    const { formData, onFormChange, resetForm } = useForm(defaultData);

    if (!open) {
        resetForm;
        () => setResponse(null)
        return ;
    }

    if (response) {
        if (response.success === true) return <Success message={response} />;
        if (response.success === false) return <Failure message={response} />;
    }

    return (
        <div className='flex col suggestion-box'>
            <h2>Suggestion Box</h2>
            <form
                className='flex col gap-1r'
                onSubmit={(e) => {
                    e.preventDefault();
                    submit({
                        ...formData,
                        discipline: sessionStorage.getItem('curriculumSlug') || 'none'
                    });
                }}
            >
                <input
                    type='text'
                    placeholder='Title'
                    onChange={(e) => onFormChange('title', e.target.value)}
                />
                <textarea
                    className='sugg-area'
                    placeholder='Your suggestion...'
                    onChange={(e) => onFormChange('suggestion', e.target.value)}
                />
                <button type='submit'>Submit Suggestion</button>
            </form>
        </div>
    );
}

const Success = ({ message }) => (
    <div className='flex col suggestion-box'>
        <h2>✅ Success</h2>
        <p>{message.message}</p>
    </div>
);

const Failure = ({ message }) => (
    <div className='flex col suggestion-box'>
        <h2>❌ Error</h2>
        <p>{message.message || 'Something went wrong.'}</p>
    </div>
);
