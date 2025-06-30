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
