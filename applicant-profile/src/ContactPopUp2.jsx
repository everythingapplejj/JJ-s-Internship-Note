import React, { useState } from 'react';
import './ContactPopUp2.css';
import closeIcon from './assets/plus.svg'; // placeholder Image

export default function ContactPopUp2({ name, onClose }) {
  const [status, setStatus] = useState('unreviewed');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Status updated to: ${status}`);
    onClose(); // Close modal after submitting
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button className="ExitButton" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
          <h4>Would you like to change {name}'s application status?</h4>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <label>
              <input type="radio" value="reviewed" checked={status === 'reviewed'} onChange={handleChange} />
              Reviewed
            </label>
            <label>
              <input type="radio" value="unreviewed" checked={status === 'unreviewed'} onChange={handleChange} />
              Unreviewed
            </label>
            <label>
              <input type="radio" value="contacted" checked={status === 'contacted'} onChange={handleChange} />
              Contacted
            </label>
            <label>
              <input type="radio" value="accepted" checked={status === 'accepted'} onChange={handleChange} />
              Accepted
            </label>
            <div className="modal-footer">
              <button type="submit" className="save-btn">Save</button>
              <button type="button" className="cancel-btn" onClick={onClose}>No, cancel</button>
            </div>
          </form>
        </div>
        <div className="PageIndicators2">
          <div className="Indicators2">
            <div className="RectangleLeft2"></div>
            <div className="RectangleRight2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}