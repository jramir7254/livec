const  handleNewSuggestion  = require('@service/suggestion/handle-suggestion.js')
const { AppError } = require('@errors');

const logger = require('@logger').addSource({
    file: 'suggestion.controller', 
    method: "postSuggestion", 
    params: ['req.body']
});


const postSuggestion = async (req, res) => {
    
    try { logger.start('POST Suggestion')

        const { userId, title, suggestion, discipline, sectionId } = req.body

        logger.info("suggestion.post.started", { submitterId: userId, sectionId })
        const suggestionId = await handleNewSuggestion(userId, title, suggestion, discipline, sectionId);

        logger.success("suggestion.post.success", { suggestionId }); 
        logger.end('POST Suggestion')

        return res.status(200).json({ success: true, suggestionId , message: `Suggestion succesfully submitted with ID: ${suggestionId}` })

    } catch (error) {

        if (!(error instanceof AppError)) {
            logger.error(`suggestion.post.failed`, { err: error.message })
        } else {
            logger.info(`suggestion.post.failed`, { err: error.errorCode })
        }

        logger.end('POST Suggestion') 

        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.publicMessage || 'Internal Server Error'
        });

    } 
}

module.exports = { postSuggestion }