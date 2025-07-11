import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/EICDecisionPage.css'; 

const EICBoardReviewPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [decisions, setDecisions] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/api/eic/board/recommendations')
      .then(res => {
        setRecommendations(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDecisionChange = (id, value) => {
    setDecisions(prev => ({ ...prev, [id]: value }));
  };

  const submitDecision = async (id) => {
    try {
      await axios.post(`http://localhost:3001/api/eic/board/decision/${id}`, {
        boardDecision: decisions[id]
      });
      alert('Board decision submitted');
    } catch (err) {
      alert('Failed to submit decision');
    }
  };

  return (
    <div className="eic-decision-page">
      <h1 className="eic-title">Editorial Board Final Review</h1>

      {loading ? <p>Loading recommendations</p> : (
        recommendations.map(item => (
          <div key={item._id} className="proposal-card">
            <h2>{item.title}</h2>
            <p><strong>AE Recommendation:</strong> {item.aeRecommendation}</p>
            <p><strong>EIC Decision:</strong> {item.eicDecision}</p>

            <label><strong>Board Final Decision:</strong></label>
            <select
              value={decisions[item._id] || ''}
              onChange={e => handleDecisionChange(item._id, e.target.value)}
            >
              <option value="">Select</option>
              <option value="approve">Approve</option>
              <option value="reject">Reject</option>
            </select>
            <button className="decision-button" onClick={() => submitDecision(item._id)}>
              Submit Final Decision
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default EICBoardReviewPage;
