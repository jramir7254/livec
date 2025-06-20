import React, { useEffect, useState } from 'react';

const TriageProposals = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch('/api/proposed-changes/pending')
      .then(res => res.json())
      .then(setProposals)
      .catch(err => console.error('Error fetching proposals', err));
  }, []);

  const handleTriage = async (id, decision) => {
    const res = await fetch(`/api/proposed-changes/${id}/triage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ decision })
    });

    if (res.ok) {
      setProposals(prev => prev.filter(p => p.id !== id));
      alert(`Proposal ${id} triaged as "${decision}"`);
    } else {
      alert('Error submitting decision');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pending Proposed Changes</h1>
      {proposals.length === 0 ? (
        <p>No pending proposals.</p>
      ) : (
        <ul className="space-y-4">
          {proposals.map((p) => (
            <li key={p.id} className="border p-4 rounded">
              <p><strong>ID:</strong> {p.id}</p>
              <p><strong>Level:</strong> {p.level}</p>
              <p><strong>Action:</strong> {p.action}</p>
              <p><strong>Details:</strong> {p.details}</p>
              <div className="mt-2 space-x-2">
                <button onClick={() => handleTriage(p.id, 'desk_reject')} className="bg-red-500 text-white px-2 py-1 rounded">Desk Reject</button>
                <button onClick={() => handleTriage(p.id, 'ae_review')} className="bg-blue-500 text-white px-2 py-1 rounded">AE Review</button>
                <button onClick={() => handleTriage(p.id, 'external_review')} className="bg-green-500 text-white px-2 py-1 rounded">External Review</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TriageProposals;
