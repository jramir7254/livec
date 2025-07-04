const HTTP_STATUS = require('./http-codes')


const Roles = Object.freeze({
    COMMUNITY_MEMBER: 'community-member',
    REVIEWER: 'reviewer',
    ASSOCIATE_EDITOR: 'associate-editor',
    EDITOR_IN_CHIEF: 'editor-in-chief',
    ACM_ED_BOARD: 'acm-ed-board'
});


const Status = Object.freeze({
    SUBMITTED: 'submitted',
    REJECTED: 'rejected',
    ASSIGNED: 'assigned',
    UNDER_REVIEW: 'under-review',
    UNDER_CONSIDERATION: 'under-consideration',
    ACCEPTED: 'accepted'
})


const Step = Object.freeze({
    AWAITING_INITIAL_RESPONSE: 'awaiting-initial-response',
    REVIEWING: "reviewing"
})



module.exports = { Roles, HTTP_STATUS, Status, Step }