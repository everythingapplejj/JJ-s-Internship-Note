// SingleExperiencePopup.jsx
import React from 'react';

const SingleExperiencePopup = ({ title, company, period, description, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 p-4 rounded-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <button className="flex items-center space-x-1" onClick={onClose}>
            <span className="font-medium">Back</span>
          </button>
          <button onClick={onClose}>
            <span>X</span>
          </button>
        </div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-2"><strong>Company:</strong> {company}</p>
        <p className="mt-2"><strong>Worked From:</strong> {period}</p>
        <p className="mt-2"><strong>Job Description:</strong> {description}</p>
      </div>
    </div>
  );
}

export default SingleExperiencePopup;
