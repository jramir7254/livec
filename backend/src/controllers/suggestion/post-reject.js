const { handleRejectSuggestion } = require('@service/suggestion')
const { AppError } = require('@errors');

const logger = require('@logger').addSource({
    file: 'suggestion.controller',
    method: "postSuggestion",
    params: ['req.body']
});


const postRejection = async (req, res) => {

    try {
        logger.start('POST Suggestion Rejected')

        const { id } = req.params
        const { rejectedBy, reason, message } = req.body

        logger.info("suggestion.reject.started", { suggestionId: id, rejectedBy: rejectedBy })
        const rejectId = await handleRejectSuggestion(id, rejectedBy, reason, message);

        logger.success("suggestion.reject.success", { rejectId });
        logger.end('POST Suggestion Rejected')

        return res.status(200).json({ success: true, rejectId, message: `Suggestion succesfully rejected with ID: ${rejectId}` })

    } catch (error) {

        if (!(error instanceof AppError)) {
            logger.error(`suggestion.reject.failed`, { err: error.message })
        } else {
            logger.info(`suggestion.reject.failed`, { err: error.errorCode })
        }

        logger.end('POST Suggestion Rejected')

        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.publicMessage || 'Internal Server Error'
        });

    }
}

module.exports = { postRejection }