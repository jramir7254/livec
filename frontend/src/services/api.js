import axios from 'axios';

export const fetchReviewerProposals = () => axios.get('/api/reviewer/proposals');

export const submitReviewFeedback = (proposalId, data) =>
  axios.post(`/api/reviewer/proposals/${proposalId}/feedback`, data);