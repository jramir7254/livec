import React, { useState, useEffect } from 'react';

const ProposeChange = () => {
  const [curriculum, setCurriculum] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [actionType, setActionType] = useState('');
  const [elementId, setElementId] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    fetch('/api/curriculum-structure')
      .then(res => res.json())
      .then(setCurriculum)
      .catch(err => console.error('Error loading curriculum:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/propose-change', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        level: selectedLevel,
        action: actionType,
        elementId,
        details,
      }),
    });

    if (response.ok) {
      alert('Your change was submitted. A public notification has been initiated.');
      setSelectedLevel('');
      setActionType('');
      setElementId('');
      setDetails('');
    } else {
      alert('Error submitting your change.');
    }
  };  


  const hierarchyLevels = ['Knowledge Area', 'Knowledge Unit', 'Topic', 'Learning Outcome', 'Competency Realm', 'Competency Area', 'Competency'];

  const actionOptions = [
    { value: 'add', label: 'Add new element' },
    { value: 'reorder', label: 'Change order of elements' },
    { value: 'remove', label: 'Remove an element' },
    { value: 'edit', label: 'Edit text of an element' },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Propose a Curriculum Change</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Hierarchy Level:</label>
          <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)} className="border p-2 w-full">
            <option value="">Select Level</option>
            {hierarchyLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold">Action Type:</label>
          <select value={actionType} onChange={e => setActionType(e.target.value)} className="border p-2 w-full">
            <option value="">Select Action</option>
            {actionOptions.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold">Element ID (optional for new elements):</label>
          <input type="text" value={elementId} onChange={e => setElementId(e.target.value)} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block font-semibold">Change Details:</label>
          <textarea value={details} onChange={e => setDetails(e.target.value)} className="border p-2 w-full h-32" placeholder="Describe the proposed change in detail" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Feedback</button>
      </form>
    </div>
  );
};

export default ProposeChange;
