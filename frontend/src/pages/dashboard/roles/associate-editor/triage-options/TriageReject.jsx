
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal, { DefaultView, ConfirmationView } from '@components/Overlays/Modal';
import useSuggestion from '@hooks/useSuggestion'
import StatusIcon from '@components/Table/StatusIcon';




// export function RejectOverlay({ suggestion = {} }) {
//     const { reject } = useSuggestion()

//     // if (!showing) return null;

//     return (
//         <div className='flex col'>
//             <h2>Reason for rejection</h2>
//             <EditorGroup>
//                 <Editor field={{ rejectionReason: '' }} />
//                 {/* <Editor field={{ returnMessageToSubmitter: '' }} /> */}
//                 <SubmitButton onSubmit={reject}>
//                     <Modal>
//                         <DefaultView message={"Are you sure you want to Reject?"}>
//                             <p>This wil turn status from</p>
//                             <div><StatusIcon status={'assigned'} /> → <StatusIcon status={'rejected'} /></div>
//                         </DefaultView>
//                         <ConfirmationView message={"This is a after confirmation"} />
//                     </Modal>
//                 </SubmitButton>
//             </EditorGroup>
//         </div>
//     )
// }

import { Form, SubmitButton } from '@components/form';
import { TextArea } from '@components/form/input';


export function RejectOverlay2({ suggestion = {} }) {
    const { reject } = useSuggestion()



    return (
        <Form>
            <TextArea field={{ reason: '' }} label='Reason for rejection' />
            <TextArea field={{ message: '' }} label='Message to submitter' />
            <SubmitButton onSubmit={(formData) => reject(suggestion.id, formData)} text='Submit Rejection'>
                <Modal>
                    <DefaultView message={"Are you sure you want to Reject?"}>
                        <p>This wil turn status from</p>
                        <div><StatusIcon status={'assigned'} /> → <StatusIcon status={'rejected'} /></div>
                    </DefaultView>
                    <ConfirmationView message={"This is a after confirmation"} />
                </Modal>
            </SubmitButton>
        </Form>
    )
}








