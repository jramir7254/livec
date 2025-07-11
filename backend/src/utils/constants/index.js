const HTTP_STATUS = require('./http-codes')
const Status = require('./status')


const Roles = Object.freeze({
    COMMUNITY_MEMBER: 'community-member',
    REVIEWER: 'reviewer',
    ASSOCIATE_EDITOR: 'associate-editor',
    EDITOR_IN_CHIEF: 'editor-in-chief',
    ACM_ED_BOARD: 'acm-ed-board'
});



const Actions = Object.freeze({
    DESK_REJECT: 'desk-reject',
    START_REVIEW: 'start-review',
    DEFER_TO_REVIEWER: 'defer-to-reviewer',
    ASSIGNED_ASSOCIATE_EDITOR: 'assigned-associate-editor',
    ASSIGNED_REVIEWERS: 'assigned-reviewers'
})




const Step = Object.freeze({
    AWAITING_INITIAL_RESPONSE: 'awaiting-initial-response',
    REVIEWING: "reviewing",
    AWAITING_REVIEWER: 'awaiting-reviewer'
})



module.exports = { Roles, HTTP_STATUS, Status, Step, Actions }


// export const Status = Object.freeze({
//     Public: {
//         SUBMITTED: 'submitted',
//         REJECTED: 'rejected',
//         ASSIGNED: 'assigned',
//         UNDER_REVIEW: 'under-review',
//         UNDER_CONSIDERATION: 'under-consideration',
//         ACCEPTED: 'accepted',
//         PENDING_EXTERNAL_REVIEW: 'pending-external-review'
//     },

//     Private: {
//         AWAITING_INITIAL_RESPONSE: 'awaiting-initial-response',
//         REVIEWING: 'reviewing',
//         AWAITING_REVIEWER: 'awaiting-reviewer',
//         REVIEW_ASSIGNED: 'review-assigned',
//         REVIEW_IN_PROGRESS: 'review-in-progress',
//         AWAITING_FEEDBACK: 'awaiting-feedback'
//     },

//     System: {
//         NEW: 'new',
//         ACTIVE: 'active',
//         UNASSIGNED: 'unassigned',
//         PENDING: 'pending',
//         ESCALATED: 'escalated',
//         SUSPENDED: 'suspended',
//         INACTIVE: 'inactive',
//         CLOSED: 'closed',
//         ARCHIVED: 'archived',
//         DEFERRED: 'deferred',
//         ON_HOLD: 'on-hold',
//         FLAGGED: 'flagged',
//         RESOLVED: 'resolved'
//     },

//     SUBMITTED: 'submitted',
//     REJECTED: 'rejected',
//     ASSIGNED: 'assigned',
//     UNDER_REVIEW: 'under-review',
//     UNDER_CONSIDERATION: 'under-consideration',
//     ACCEPTED: 'accepted'
// })
