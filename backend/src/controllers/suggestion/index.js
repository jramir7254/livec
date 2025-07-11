// src/controllers/suggestion/index.js

import { postSuggestion } from './post-suggestion.js';
import { postRejection } from './post-reject.js';
import { postStartReview } from './post-start.js';
import { postReviewers } from './post-reviewers.js';
import { getSuggestion } from './get-suggestion.js';

export {
    postSuggestion,
    postRejection,
    getSuggestion,
    postStartReview,
    postReviewers
};
