import { API } from '@api/client.js';
import { logger } from '@utils/logger'

const log = logger.create('postSuggestion.js');

export const postSuggestion = async (userId, title, suggestion, discipline, sectionId) => {
    try {

        console.log({
            userId,
            title,
            suggestion,
            discipline,
            sectionId
        });


        const { data } = await API.post('/suggestion', {
            userId,
            title,
            suggestion,
            discipline,
            sectionId
        });

        log.success('✅ Suggestion created with ID:', data.suggestionId);
        return data

    } catch (error) {
        const message = error.response?.data?.message || 'Unknown error';
        log.error('❌ Failed to post suggestion:', error.response);
        throw Error(error.response?.data);
    }
};


export const postRejection = async (suggestionId, rejectedBy, reason, message) => {
    try {
        log.debug({ suggestionId, rejectedBy, reason, message })
        const response = await API.post(`/suggestion/${suggestionId}/reject`, {rejectedBy, reason, message})
        logger.debug('response')
        return response
    } catch (error) {
        logger.error(error)
    }
}

export const postStartReview = async (suggestionId, startedBy, notes, message) => {
    try {
        log.debug({ startedBy, notes, message })
        const response = await API.post(`/suggestion/${suggestionId}/start-review`, { startedBy, notes, message })
        console.log(response)
    } catch (error) {

    }
}


export const getSuggestion = async (suggestionId, role) => {
    try {
        const response = await API.get(`/suggestion/${suggestionId}`, {
            params: { role }
        });

        const { requestedSuggestion } = response.data
        log.table(requestedSuggestion)
        return requestedSuggestion
    } catch (error) {
        log.error(error)
    }
}


export const postReviewers = async (id, notes, message, reviewers) => {
    try {
        logger.info("started post reviewers")
        await API.post(`/suggestion/${id}/assign-reviewers`, { notes, message, reviewers })

    } catch (error) {
        log.error(error)
    }
}