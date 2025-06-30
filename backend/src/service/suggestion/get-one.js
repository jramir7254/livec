const { AppError, NoAssociateEditorsFoundError } = require('@errors');
const AssociateEditors = require('@models/users/associate-editor/editors.model.js')
const Suggestions = require('@models/suggestion/suggestions.model.js')

const logger = require('@logger').addSource({
    file: 'auth.service',
    method: "assignAssociateEditorToSuggestion",
    params: ['suggestion']
});



const getSuggestionById = async (suggestionId) => {
    try {

        logger.debug("suggestion.get.db.searching")

        const requestedSuggestion = await Suggestions.findById(suggestionId)

        if (!requestedSuggestion) {
            throw new SuggestionNotFoundError
        }

        logger.debug("suggestion.get.found")

        return requestedSuggestion

    } catch (error) {

        if (!(error instanceof AppError)) {
            logger.error(error.stack)
        } else {
            logger.warn(error.message, { err: error.errorCode })
        }

        throw error
    }
}

module.exports = getSuggestionById