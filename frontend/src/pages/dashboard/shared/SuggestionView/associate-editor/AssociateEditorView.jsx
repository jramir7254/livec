import useTabs from '@hooks/useTabs';
import { Button } from '@components/Buttons';
import { toTitleCase, formatDate, Status, Roles } from '@utils/constants';
import Page from '@pages/details/Page';
import styles from '../SuggestionView.module.scss';
import { BackButton } from '@components/Buttons';
import StatusIcon from '@components/Table/StatusIcon';
import useVariant from '@hooks/useVariant';
import { Triage } from '@utils/constants';

import { TriageOptionView } from './TriageOptionView';















export default function AssociateEditorView({ suggestion, user }) {
    const { setVariant, currentVariant, isActive } = useVariant()

    const status = suggestion.status
    console.log(status)

    const main = useTabs({
        sugg: <SuggestionContent suggestion={suggestion} status={status} />,
        other: <Other section={suggestion.section} />
    }, <SuggestionContent suggestion={suggestion} status={status} />)


    const sys = suggestion.system.status



    return (
        <>

            <div className={styles.header}>
                <BackButton to={`/dashboard/${user.id}`} />
                <div className={styles.header__buttons}>
                    <Button isActive={main.isActive('sugg')} variant='round' onClick={() => main.setView('sugg')} text='Suggestion' />
                    <Button isActive={main.isActive('other')} variant='round' onClick={() => main.setView('other')} text='Section' />
                </div>
            </div>

            {/* Main panel showing the suggestino info */}

            <div className={styles['main-content']}>
                {main.CurrentView}
            </div>



            {/* Side content pane to the right */}

            {sys !== Status.System.CLOSED &&
                <div className={styles['side-content']}>
                    <TriageOptionView suggestion={suggestion} option={currentVariant} />
                </div>}

            {sys === Status.System.CLOSED &&
                <div className={styles['side-content']}>
                    <h2>Desk Rejected</h2>
                    <p><strong>Reason:</strong> {suggestion.meta.rejection_reason}</p>
                </div>}

            {sys !== Status.System.CLOSED && <div className={styles.footer}>
                <TriageButtons setView={setVariant} isActive={isActive} />
            </div>
}
        </>
    )
}


const SuggestionContent = ({ suggestion, status, }) => {
    return (
        <>
            <div className={styles['main-content__header']}>
                <div>

                    <h1 className={styles.header__title}> {suggestion.title || "Untitled"} </h1>
                    <div className='flex'>

                        <p className={styles.header__date}>Submitted on {formatDate(suggestion.timeCreated)}</p>
                    </div>

                    <hr className={styles.header__divider} />
                </div>


                <div className={styles.header__meta}>
                    <h3 className={styles['meta-item']}><strong>Reference ID:</strong> {suggestion.id}</h3>
                    <h3 className={styles['meta-item']}><strong>Discipline: </strong>{toTitleCase(suggestion.discipline)}</h3>
                    <h3 className={styles['meta-item']}><strong>Current Status: </strong>{<StatusIcon status={status} />}</h3>
                    <h3 className={styles['meta-item']}><strong>Associated Section: </strong>{suggestion.section.title}</h3>
                </div>
            </div>


            {/* The text content containing the suggestion */}

            <div className={styles.text}>
                <p>{suggestion.suggestion}</p>
            </div>

        </>
    )
}

const Other = ({ section }) => {
    return (
        <div style={{ padding: '2rem' }}>
            <Page text={section.markdown_heading + section.markdown_body} />
        </div>
    )
}






const TriageButtons = ({ setView, isActive }) => {
    return (
        <>
            <Button variant={'confirm'} text={'Start Review'} onClick={() => setView(Triage.START_REVIEW)} isActive={isActive(Triage.START_REVIEW)} />
            <Button variant={'danger'} text={'Desk Reject'} onClick={() => setView(Triage.DESK_REJECT)} isActive={isActive(Triage.DESK_REJECT)} />
            <Button variant={'info'} text={'Defer to Reviewer'} onClick={() => setView(Triage.DEFER_TO_REVIEWER)} isActive={isActive(Triage.DEFER_TO_REVIEWER)} />
        </>
    )
}
