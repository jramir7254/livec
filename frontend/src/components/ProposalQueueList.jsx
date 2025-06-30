import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProposalQueueList = ({ reviewerId }) => {
  const [queue, setQueue] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchQueue = async () => {
      const res = await axios.get(`http://localhost:3001/api/reviewer/${reviewerId}/queue`);
      setQueue(res.data);
    };
    fetchQueue();
  }, [reviewerId]);

  const submitFeedback = async () => {
    if (!selectedProposal) return;
    await axios.post(`http://localhost:3001/api/reviewer/${reviewerId}/proposal/${selectedProposal.proposalId}/feedback`, {
      feedback,
    });
    setStatus('Feedback submitted');
    setFeedback('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reviewer Queue</h2>
      <div className="flex gap-6">
        <div className="w-1/3">
          <h3 className="font-semibold mb-2">Proposals</h3>
          <ul className="border rounded p-2">
            {queue.map((proposal) => (
              <li
                key={proposal.proposalId}
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => setSelectedProposal(proposal)}
              >
                {proposal.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3">
          {selectedProposal ? (
            <div>
              <h3 className="text-xl font-semibold">{selectedProposal.title}</h3>
              <p className="mt-2 text-sm text-gray-600">Segment: {selectedProposal.segment}</p>
              <h4 className="mt-4 font-semibold">Change History:</h4>
              <ul className="list-disc ml-6 mb-4">
                {selectedProposal.history.map((entry, index) => (
                  <li key={index}>{entry}</li>
                ))}
              </ul>
              <textarea
                placeholder="Enter feedback"
                className="w-full border p-2 rounded mb-2"
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button onClick={submitFeedback} className="bg-blue-600 text-white px-4 py-2 rounded">
                Submit Feedback
              </button>
              {status && <p className="text-green-600 mt-2">{status}</p>}
            </div>
          ) : (
            <p>Select a proposal to review</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposalQueueList;
