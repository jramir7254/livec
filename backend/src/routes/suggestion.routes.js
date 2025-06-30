const express = require('express');

const { postSuggestion, postRejection, getSuggestion, postStartReview, postReviewers } = require('@controllers/suggestion/');

const router = express.Router();

router.get('/:id', getSuggestion);

router.post('/', postSuggestion);
router.post('/:id/reject', postRejection);
router.post('/:id/start-review', postStartReview);
router.post('/:id/assign-reviewers', postReviewers);



// router.get('/user/:userId', getUserSuggestions);


module.exports = router;