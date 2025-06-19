import React from 'react';
import { useParams } from 'react-router-dom';

const CurriculumReview = () => {
  const { curriculumId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Review Curriculum: {curriculumId}</h1>
      {}
    </div>
  );
};

export default CurriculumReview;
