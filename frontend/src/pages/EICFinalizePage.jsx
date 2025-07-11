import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/EICDecisionPage.css';

const EICFinalizePage = () => {
  const [proposals, setProposals] = useState([]);
  const [decisions, setDecisions] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/eic/finalize-proposals')
      .then((res) => {
        setProposals(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading proposals:', err);
        setLoading(false);
      });
  }, []);

  const handleDecisionChange = (id, value) => {
    setDecisions({ ...decisions, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/api/eic/finalize-decisions', {
        decisions,
      });
      setSubmitMessage('Final decisions submitted to the Editorial Board');
    } catch (err) {
      console.error('Error submitting final decisions:', err);
      setSubmitMessage('Submission failed');
    }
  };

  return (
    <div className="eic-decision-page">
      <h1 className="eic-title">Finalize Editorial Board Decision</h1>

      {loading ? (
        <p>Loading proposals</p>
      ) : (
        <>
          {proposals.length === 0 ? (
            <p>No proposals ready for board decision</p>
          ) : (
            proposals.map((proposal) => (
              <div key={proposal._id} className="proposal-card">
                <h3>{proposal.title}</h3>
                <p><strong>Summary:</strong> {proposal.summary}</p>
                <p><strong>AE Recommendation:</strong> {proposal.aeRecommendation}</p>
                <label><strong>Board Decision:</strong></label>
                <select
                  value={decisions[proposal._id] || ''}
                  onChange={(e) =>
                    handleDecisionChange(proposal._id, e.target.value)
                  }
                >
                  <option value="">Select</option>
                  <option value="approve">Approve</option>
                  <option value="reject">Reject</option>
                  <option value="revise">Request Revisions</option>
                </select>
              </div>
            ))
          )}

          {proposals.length > 0 && (
            <button className="decision-button" onClick={handleSubmit}>
              Submit Final Decisions
            </button>
          )}

          {submitMessage && <p>{submitMessage}</p>}
        </>
      )}
    </div>
  );
};

export default EICFinalizePage;
