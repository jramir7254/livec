import { useState, useEffect, useContext } from "react"
import { UserContext } from '@context/UserProvider';
import { postSuggestion, postRejection, postStartReview, postReviewers } from "@utils/suggestionHandler";
import { API } from '@api/client.js'
import { logger, setCorrelationId, clearCorrelationId } from '@utils/logger'

const log = logger.create('useSuggestion.js');




export default function useSuggestion() {
    const { user } = useContext(UserContext)
    const [response, setResponse] = useState(null)
    const [suggestions, setSuggestions] = useState([])



    useEffect(() => {
        (async function () {
            try {
                if (!user) return
                const response = API.get(`/user/${user.role}/${user.id}/suggestions`)
                const { data } = await response
                setSuggestions(data.suggestions)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, [])








    const submit = async ({ title, text, discipline, sectionId }) => {
        try {

            setCorrelationId('submit-suggestion')
            logger.groupCollapsed("Submit Suggestion Flow")
            const res = await postSuggestion(user.id, title, text, discipline, sectionId)
            setResponse(res);
        } catch (error) {
            log.error(error)
            setResponse({ success: false })
        }
    }





    /**
     * 
     * @param {string} suggestionId 
     * @param {{forPrivate: string, forPublic: string}} formData 
     */



    const reject = async (suggestionId, formData) => {
        try {
            logger.startProcess("Reject Suggestion")
            const { forPrivate, forPublic } = formData
            await postRejection(suggestionId, user.id, forPrivate, forPublic)
        } catch (error) {
            logger.error(error)
        } finally {
            logger.endProcess()
        }
    }








    const startReview = async (suggestionId, formData) => {
        try {
            console.log("call to start:", suggestionId, formData)
            const { forPrivate, forPublic } = formData
            console.log("des:", forPrivate, forPublic)

            await postStartReview(suggestionId, user.id, forPrivate, forPublic)
        } catch (error) {
            console.error(error)

        }
    }









    const assignReviewers = async (suggestionId, formData) => {
        try {
            console.log("call to start:", suggestionId, formData)
            const { forPrivate, forPublic, reviewer } = formData
            console.log("des:", forPrivate, forPublic, reviewer)

            //await postReviewers(suggestionId, notes, message, reviewers)
        } catch (error) {
            console.error(error)

        }
    }

    return { submit, setResponse, response, reject, suggestions, startReview, assignReviewers }
}
