import React from 'react';
import './ExperienceListPopUp.css';
import closeIcon from './assets/plus.svg';
import arrowIcon from './assets/plus.svg';

const ExperienceListPopUp = (props) => {
  const experiences = [
    'Starbucks Barista',
    'Babysitter',
    'Applebee’s Waiter',
    'Starbucks Cashier',
    'Camp Counselor'
  ];

  return (
    props.opened && (
      <div className="experience-list-overlay">
        <div className="experience-list-modal">
          <div className="experience-list-modal-content">
            <div className="experience-list-modal-header">
              <h4>Job Experience</h4>
              <button className="experience-list-exit-button" onClick={() => props.togglePopup(null)}>
                <img src={closeIcon} alt="Close" />
              </button>
            </div>
            <div className="experience-list-modal-body">
              <ul className="experience-list">
                {experiences.map((experience, index) => (
                  <li
                    key={index}
                    className="experience-item"
                    onClick={experience === 'Applebee’s Waiter' ? props.onViewDetail : null}
                  >
                    {experience}
                    <img src={arrowIcon} alt="Arrow" className="arrow" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ExperienceListPopUp;