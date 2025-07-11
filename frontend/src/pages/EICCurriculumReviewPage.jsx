import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/EICDecisionPage.css';

const EICCurriculumReviewPage = () => {
  const [sections, setSections] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/eic/curriculum-review')
      .then(res => setSections(res.data))
      .catch(err => {
        console.error('Error:', err);
        setError('Failed to load curriculum sections');
      });
  }, []);

  const handleDecision = (id, decision) => {
    alert(`Decision "${decision}" recorded for section ${id}`);
  };

  return (
    <div className="eic-decision-page">
      <h1 className="eic-title">EIC Curriculum Change Review</h1>
      {error && <p className="error">{error}</p>}
      {sections.map(section => (
        <div key={section.id} className="proposal-card">
          <h2>{section.sectionTitle}</h2>
          <p><strong>Proposed by:</strong> {section.proposedBy}</p>
          <p><strong>Current Text:</strong> {section.currentText}</p>
          <p><strong>Proposed Text:</strong> {section.proposedText}</p>
          <div className="decision-buttons">
            <button onClick={() => handleDecision(section.id, 'Approve')}>Approve</button>
            <button onClick={() => handleDecision(section.id, 'Request Revision')}>Request Revision</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EICCurriculumReviewPage;
