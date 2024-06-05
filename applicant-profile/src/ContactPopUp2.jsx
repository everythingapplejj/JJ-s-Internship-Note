import React, { useState } from 'react';
import closeIcon from './assets/plus.svg';

const ContactPopUp2 = ({ name, onClose, opened, onStatusSelect }) => {
  const [status, setStatus] = useState('unreviewed');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Status updated to: ${status}`);
    onStatusSelect(status);
    onClose();
  };

  if (!opened) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-96 h-auto p-5 rounded-lg shadow-lg relative flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h4 className="text-xl font-black text-gray-600 text-center w-full">
            Would you like to change {name}'s application status?
          </h4>
          <button className="absolute top-1 right-1 text-gray-600" onClick={onClose}>
            <span>X</span>
          </button>
        </div>
        <div className="pl-8 mb-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="flex items-center">
              <input
                type="radio"
                value="reviewed"
                checked={status === 'reviewed'}
                onChange={handleChange}
                className="mr-2"
              />
              Reviewed
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="unreviewed"
                checked={status === 'unreviewed'}
                onChange={handleChange}
                className="mr-2"
              />
              Unreviewed
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="contacted"
                checked={status === 'contacted'}
                onChange={handleChange}
                className="mr-2"
              />
              Contacted
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="accepted"
                checked={status === 'accepted'}
                onChange={handleChange}
                className="mr-2"
              />
              Accepted
            </label>
            <div className="flex justify-center gap-3 mt-4">
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={onClose}
              >
                No, cancel
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-blue-700"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopUp2;
