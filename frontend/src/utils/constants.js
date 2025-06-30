
export const Roles = Object.freeze({
    COMMUNITY_MEMBER: 'community-member',
    REVIEWER: 'reviewer',
    ASSOCIATE_EDITOR: 'associate-editor',
    EDITOR_IN_CHIEF: 'editor-in-chief',
    ACM_ED_BOARD: 'acm-ed-board'
});


export const Status = Object.freeze({
    SUBMITTED: 'submitted',
    REJECTED: 'rejected',
    ASSIGNED: 'assigned',
    UNDER_REVIEW: 'under-review',
    UNDER_CONSIDERATION: 'under-consideration',
    ACCEPTED: 'accepted'
})

export const Disciplines = Object.freeze({
    COMPUTER_SCIENCE: 'computer-science',
    REJECTED: 'rejected',
    ASSIGNED: 'assigned',
    UNDER_REVIEW: 'under-review',
    UNDER_CONSIDERATION: 'under-consideration',
    ACCEPTED: 'accepted'
})


export const Step = Object.freeze({
    AWAITING_INITIAL_RESPONSE: 'awaiting-initial-response',
    REVIEWING: 'reviewing'
})


export const toTitleCase = (constant = '') => {
    return constant.split('-')
        .map(item => item.charAt(0).toUpperCase() + item.substring(1))
        .join(' ');
};


export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date));

}



