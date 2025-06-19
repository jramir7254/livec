import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectCurriculum = () => {
  const [curricula, setCurricula] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/curricula')  
      .then(res => res.json())
      .then(data => setCurricula(data))
      .catch(err => console.error('Failed to fetch curricula:', err));
  }, []);

  const handleSelect = (curriculumId) => {
    navigate(`/review/${curriculumId}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Select a Curriculum to Review</h1>
      <ul className="space-y-4">
        {curricula.map(curriculum => (
          <li key={curriculum.id} className="border p-4 rounded shadow hover:bg-gray-50 cursor-pointer" onClick={() => handleSelect(curriculum.id)}>
            <strong>{curriculum.name}</strong> — Version: {curriculum.version}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectCurriculum;
