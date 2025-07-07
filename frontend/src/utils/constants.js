
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
    CYBERSECURITY: 'cybersecurity',
    INFORMATION_SYSTEMS: 'information-systems',
    COMPUTER_ENGINEERING: 'computer-engineering',

    INFORMATION_TECHNOLOGY: 'information-technology',
    DATA_SCIENCE: 'data-science',
    COMPUTING_CURRICULA: 'computing-curricula',
    SOFTWARE_ENGINEERING: 'software-engineering'
})


export const Step = Object.freeze({
    AWAITING_INITIAL_RESPONSE: 'awaiting-initial-response',
    REVIEWING: "reviewing",
    AWAITING_REVIEWER: 'awaiting-reviewer'
})














/**
 * @todo remove methods below and adjust reference
 */

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



