/**
 * Represents the public status for suggestions visible to submitters.
 *
 * Used to show user-facing status labels and icons.
 * 
 * @typedef {Object} Public
 * @property {'submitted'} SUBMITTED - Suggestion has been submitted.
 * @property {'rejected'} REJECTED - Suggestion has been rejected.
 * @property {'assigned'} ASSIGNED - Suggestion has been assigned.
 * @property {'under-review'} UNDER_REVIEW - Suggestion is under review.
 * @property {'under-consideration'} UNDER_CONSIDERATION - Suggestion is under consideration.
 * @property {'accepted'} ACCEPTED - Suggestion has been accepted.
 * @property {'pending-external-review'} PENDING_EXTERNAL_REVIEW - Suggestion has been accepted.
 */

/**
 * @typedef {Object} Private
 * @property {'awaiting-initial-response'} AWAITING_INITIAL_RESPONSE - Waiting for submitter.
 * @property {'rejected'} REJECTED - Suggestion has been rejected.
 * @property {'reviewing'} REVIEWING - Being reviewed internally.
 * @property {'awaiting-reviewer'} AWAITING_REVIEWER - Waiting for external reviewer.
 */

/**
 * @typedef {Object} System
 * @property {'new'} NEW - New in system.
 * @property {'closed'} CLOSED - Closed in system.
 * @property {'active'} ACTIVE - Currently active.
 * @property {'unassigned'} UNASSIGNED - Not yet assigned.
 * @property {'pending'} PENDING - Pending action.
 * @property {'escalated'} ESCALATED - Escalated to higher priority.
 * @property {'suspended'} SUSPENDED - Suspended.
 * @property {'inactive'} INACTIVE - Not currently active.
 * @property {'archived'} ARCHIVED - Archived for records.
 * @property {'deferred'} DEFERRED - Deferred for later.
 * @property {'on-hold'} ON_HOLD - Deferred for later.
 * @property {'flagged'} FLAGGED - Deferred for later.
 * @property {'resolved'} RESOLVED - Deferred for later.
 */

/**
 * @typedef {Object} Status
 * @property {Public} Public - Public-facing statuses.
 * @property {Private} Private - Private/reviewer statuses.
 * @property {System} System - System-level internal statuses.
 */


/**
 * Frozen constant for all possible statuses.
 * @type {Status}
 */
export const Status = Object.freeze({
    Public: {
        SUBMITTED: 'submitted',
        REJECTED: 'rejected',
        ASSIGNED: 'assigned',
        UNDER_REVIEW: 'under-review',
        UNDER_CONSIDERATION: 'under-consideration',
        ACCEPTED: 'accepted',
        PENDING_EXTERNAL_REVIEW: 'pending-external-review'
    },

    Private: {
        AWAITING_INITIAL_RESPONSE: 'awaiting-initial-response',
        REVIEWING: 'reviewing',
        REJECTED: 'rejected',
        AWAITING_REVIEWER: 'awaiting-reviewer',
        REVIEW_ASSIGNED: 'review-assigned',
        REVIEW_IN_PROGRESS: 'review-in-progress',
        AWAITING_FEEDBACK: 'awaiting-feedback'
    },

    System: {
        NEW: 'new',
        ACTIVE: 'active',
        UNASSIGNED: 'unassigned',
        PENDING: 'pending',
        ESCALATED: 'escalated',
        SUSPENDED: 'suspended',
        INACTIVE: 'inactive',
        CLOSED: 'closed',
        ARCHIVED: 'archived',
        DEFERRED: 'deferred',
        ON_HOLD: 'on-hold',
        FLAGGED: 'flagged',
        RESOLVED: 'resolved'
    }
})



export const statusMap = {
    // === Public ===
    [Status.Public.SUBMITTED]: 'status--neutral',
    [Status.Public.REJECTED]: 'status--error',
    [Status.Public.ASSIGNED]: 'status--info',
    [Status.Public.UNDER_REVIEW]: 'status--active',
    [Status.Public.UNDER_CONSIDERATION]: 'status--warning',
    [Status.Public.ACCEPTED]: 'status--success',
    [Status.Public.PENDING_EXTERNAL_REVIEW]: 'status--external',

    // === Private ===
    [Status.Private.AWAITING_INITIAL_RESPONSE]: 'status--info',
    [Status.Private.REVIEWING]: 'status--active',
    //   [Status.Private.REJECTED]: 'status--error',
    //   [Status.Private.AWAITING_REVIEWER]: 'status--info',
    //   [Status.Private.REVIEW_ASSIGNED]: 'status--info',
    //   [Status.Private.REVIEW_IN_PROGRESS]: 'status--info',
    //   [Status.Private.AWAITING_FEEDBACK]: 'status--info',

    // === System ===
    [Status.System.NEW]: 'status--neutral',
    [Status.System.ACTIVE]: 'status--info',
    [Status.System.UNASSIGNED]: 'status--neutral',
    [Status.System.PENDING]: 'status--info',
    [Status.System.ESCALATED]: 'status--external',
    [Status.System.SUSPENDED]: 'status--warning',
    [Status.System.INACTIVE]: 'status--warning',
    [Status.System.CLOSED]: 'status--success',
    [Status.System.ARCHIVED]: 'status--neutral',
    [Status.System.DEFERRED]: 'status--warning',
    [Status.System.ON_HOLD]: 'status--warning',
    [Status.System.FLAGGED]: 'status--error',
    [Status.System.RESOLVED]: 'status--success'
};
