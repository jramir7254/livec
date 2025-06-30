const linkCommunityMemberToSuggestion = require('./link-user')
const assignAssociateEditorToSuggestion = require('./assign-editor')
const handleRejectSuggestion = require('./handle-reject')
const handleNewSuggestion = require('./handle-suggestion')
const getSuggestionById = require('./get-one')
const handleStartSuggestionReviewProcess = require('./handle-start')
const assignReviewersToSuggestion = require('./assign-reviewers')

module.exports = {handleRejectSuggestion, handleNewSuggestion, getSuggestionById, handleStartSuggestionReviewProcess, assignReviewersToSuggestion}