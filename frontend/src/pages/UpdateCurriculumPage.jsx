import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateCurriculumPage = () => {
  const { segmentId } = useParams();
  const [segment, setSegment] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  useEffect(() => {
    axios.get(`/api/curriculum/${segmentId}`)
      .then(res => {
        setSegment(res.data);
        setUpdatedText(res.data.text);
      })
      .catch(err => console.error(err));
  }, [segmentId]);

  const handleSubmit = async () => {
    try {
      await axios.put(`/api/curriculum/${segmentId}`, {
        updatedText,
        updatedBy: 'ae_user_123' 
      });
      alert('Curriculum updated successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to update curriculum');
    }
  };

  if (!segment) return <p>Loading</p>;

  return (
    <div>
      <h2>Update Curriculum Segment</h2>
      <textarea
        rows={10}
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
        style={{ width: '100%' }}
      />
      <br />
      <button onClick={handleSubmit}>Submit Update</button>
    </div>
  );
};

export default UpdateCurriculumPage;
