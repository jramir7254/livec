import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAssessments = ({ proposalId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const res = await axios.get(`/api/reviews/proposal/${proposalId}`);
        setReviews(res.data);
      } catch (error) {
        console.error('Failed to load assessments', error);
      }
    };

    fetchAssessments();
  }, [proposalId]);

  return (
    <div className="p-6 bg-white rounded shadow max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Reviewer Assessments</h2>
      {reviews.length === 0 ? (
        <p>No reviews submitted yet.</p>
      ) : (
        reviews.map((review, i) => (
          <div key={i} className="mb-4 p-4 border rounded">
            <p><strong>Reviewer:</strong> {review.reviewerName}</p>
            <p><strong>Recommendation:</strong> {review.recommendation}</p>
            <p><strong>Justification:</strong> {review.justification}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewAssessments;
