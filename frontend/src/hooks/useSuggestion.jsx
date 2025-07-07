import { useState, useEffect, useContext } from "react"
import { UserContext } from '@context/UserProvider';
import { postSuggestion, postRejection, postStartReview, postReviewers } from "@utils/suggestionHandler";
import { API } from '@api/client.js'

export default function useSuggestion() {
    const { user } = useContext(UserContext)
    const [response, setResponse] = useState(null)
    const [suggestions, setSuggestions] = useState([])



    useEffect(() => {
        (async function () {
            try {
                const response = API.get(`/user/${user.role}/${user.id}/suggestions`)
                const { data } = await response
                setSuggestions(data.suggestions)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, [])





    const submit = async ({ title, suggestion, discipline }) => {
        try {
            const res = await postSuggestion(user.id, title, suggestion, discipline)
            setResponse(res);
        } catch (error) {
            console.log()
            setResponse({ success: false })
        }
    }

    const reject = async (suggestionId, formData) => {
        try {
            console.log("call to reject:", suggestionId, formData)
            const { reason, message } = formData
            console.log("des:", reason, message)

            await postRejection(suggestionId, user.id, reason, message)
        } catch (error) {
            console.error(error)
        }
    }

    const startReview = async (suggestionId, formData) => {
        try {
            console.log("call to start:", suggestionId, formData)
            const { notes, message } = formData
            console.log("des:", notes, message)

            await postStartReview(suggestionId, user.id, notes, message)
        } catch (error) {
            console.error(error)

        }
    }

    const assignReviewers = async (suggestionId, formData) => {
        try {
            console.log("call to start:", suggestionId, formData)
            const { notes, message, reviewer } = formData
            console.log("des:", notes, message, reviewer)

            //await postReviewers(suggestionId, notes, message, reviewers)
        } catch (error) {
            console.error(error)

        }
    }

    return { submit, setResponse, response, reject, suggestions, startReview, assignReviewers }
}
