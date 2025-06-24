import React, { useState } from 'react';
import axios from 'axios';

const AEFeedbackNotifier = () => {
  const [proposalId, setProposalId] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/api/notify/send', {
        proposalId,
        memberEmail,
        message,
      });
      setStatus('Notification and acknowledgment sent');
    } catch (err) {
      console.error(err);
      setStatus('Failed to send');
    }
  };

  return (
    <div className="max-w-xl p-6 bg-white rounded shadow mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Send Feedback Notification</h2>
      <input
        type="text"
        placeholder="Proposal ID"
        className="w-full p-2 border rounded mb-3"
        value={proposalId}
        onChange={(e) => setProposalId(e.target.value)}
      />
      <input
        type="email"
        placeholder="Community Member Email"
        className="w-full p-2 border rounded mb-3"
        value={memberEmail}
        onChange={(e) => setMemberEmail(e.target.value)}
      />
      <textarea
        placeholder="Feedback Message"
        className="w-full p-2 border rounded mb-3"
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Send Notification
      </button>
      {status && <p className="mt-3 text-green-600">{status}</p>}
    </div>
  );
};

export default AEFeedbackNotifier;
