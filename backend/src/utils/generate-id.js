const { nanoid } = require('nanoid');
const { Status } = require('@utils/constants');


/*------------------------------------------------------------------------------*/

const rolePrefixMap = {
    'community-member': 'CM',
    'reviewer': 'R',
    'associate-editor': 'AE',
    'editor-in-chief': 'EIC',
};

/**
 * Generate a unique user ID with a prefix based on the role.
 * @param {string} key - One of the keys from prefixMap (e.g., 'REVIEWER')
 * @param {number} length - Length of the random ID (default 8)
 * @returns {string} e.g., 'R-5g8A1xQz'
 * 
**/

const generateUserId = (key, length = 5) => {
    const prefix = rolePrefixMap[key];

    if (!prefix) {
        throw new Error(`❌ Invalid key: ${key}`);
    }

    return `${prefix}-${nanoid(length)}`;
}

/*------------------------------------------------------------------------------*/

const disciplinePrefixMap = {
    'computer-science': 'COSC',
    'cybersecurity': 'CYBR',
    'information-systems': 'IS',
    'rejected': 'REJ'
}

/**
 * Generate a unique suggestion ID with a prefix based on its associated discipline.
 * @param {string} key - One of the keys from disciplinePrefixMap (e.g., 'computer-science')
 * @param {number} length - Length of the random ID (default 8)
 * @returns {string} e.g., 'R-5g8A1xQz'
 * 
**/

const generateSuggestionId = (key = Status.REJECTED, length = 8) => {
    const prefix = disciplinePrefixMap[key];

    if (!prefix) {
        throw new Error(`❌ Invalid key: ${key}`);
    }

    return `S${prefix}-${nanoid(length)}`;
}

/*------------------------------------------------------------------------------*/

const generateRandomId = (length = 8) => {
    return `DOC-${nanoid(length)}`;
}


module.exports = {generateUserId, generateSuggestionId, generateRandomId}

