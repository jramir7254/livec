const { AppError, SuggestionNotFoundError } = require('@errors');
const Suggestions = require('@models/suggestion/suggestions.model.js')



const logger = require('@logger').addSource({
    file: 'auth.service',
    method: "handleRejectSuggestion",
    params: ['suggestionId', 'rejectedById']
});


const handleRejectSuggestion = async (suggestionId, rejectedById, reason, message) => {

    try {

        logger.debug("suggestion.reject.db.searching")

        const suggestionToReject = await Suggestions.findById(suggestionId)

        if (!suggestionToReject) {
            throw new SuggestionNotFoundError
        }

        logger.debug("suggestion.reject.rejecting")
        const rejectId = suggestionToReject.reject(rejectedById, reason, message)
        Suggestions.update(suggestionToReject)
        logger.debug("suggestion.reject.rejected")

        return rejectId

    } catch (error) {

        if (!(error instanceof AppError)) {
            logger.error(error.stack)
        } else {
            logger.warn(error.message, { err: error.errorCode })
        }

        throw error
    }
}

module.exports = handleRejectSuggestion