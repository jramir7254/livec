import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InviteReviewers = ({ proposalId }) => {
  const [reviewers, setReviewers] = useState([]);
  const [selectedReviewerIds, setSelectedReviewerIds] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('/api/reviewers')
      .then(res => setReviewers(res.data))
      .catch(() => setStatus('Failed to load reviewers'));
  }, []);

  const handleInvite = () => {
    if (selectedReviewerIds.length === 0) {
      setStatus('Please select at least one reviewer');
      return;
    }

    axios.post('/api/invite-reviewers', {
      proposalId,
      reviewerIds: selectedReviewerIds,
      message,
    })
    .then(() => setStatus('Invitations sent successfully'))
    .catch(() => setStatus('Error sending invitations'));
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Invite External Reviewers</h2>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Select Reviewers:</label>
        <select
          multiple
          className="w-full border p-2"
          onChange={(e) => {
            const options = Array.from(e.target.selectedOptions);
            setSelectedReviewerIds(options.map(opt => opt.value));
          }}
        >
          {reviewers.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name} ({r.email})
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Optional Message:</label>
        <textarea
          className="w-full border p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        onClick={handleInvite}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send Invitations
      </button>

      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </div>
  );
};

export default InviteReviewers;
