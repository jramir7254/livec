const {postSuggestion} = require('./post-suggestion')
const {postRejection} = require('./post-reject')
const {postStartReview} = require('./post-start')
const {postReviewers} = require('./post-reviewers')
const {getSuggestion} = require('./get-suggestion')

module.exports = { postSuggestion, postRejection, getSuggestion, postStartReview, postReviewers }