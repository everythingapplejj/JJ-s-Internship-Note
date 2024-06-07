import React from 'react';
import './ExperienceSinglePopUp.css';
import closeIcon from '../../../assets/icons/ExperiencePopUp/Vector.png';
import backIcon from '../../../assets/icons/ExperiencePopUp/chevron-left.png';
import calendarIcon from '../../../assets/icons/ExperiencePopUp/Vector_calendar.png';

export default function ExperienceSinglePopUp({ onClose, onBack }) {
  return (
    <div className="experience-single-overlay">
      <div className="experience-single-modal">
        <div className="experience-single-modal-content">
          <div className="experience-single-modal-header">
            <button className="experience-single-back-button" onClick={onBack}>
              <img src={backIcon} alt="Back" />
            </button>
            <h4>Applebee’s Waiter</h4>
            <button className="experience-single-exit-button" onClick={onClose}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
          <div className="experience-single-modal-body">
            <div className="experience-single-detail">
              <p><strong>Company:</strong><br/> Applebee’s</p>
              <p><strong>Worked From:</strong></p>
              <div className="experience-single-date">
                <img src={calendarIcon} alt="Calendar" className="experience-single-calendar-icon" /> January 2022 - June 2023
              </div>
              <p className="job-description-header"><strong>Job Description:</strong></p>
              <p>
                As an Applebee's waiter, I warmly greet guests, guide them through the menu, and take orders accurately. 
                Promptly delivering food and handling transactions are key tasks. I also maintain cleanliness and organization. 
                It's fast-paced, but I enjoy creating memorable experiences for our guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}