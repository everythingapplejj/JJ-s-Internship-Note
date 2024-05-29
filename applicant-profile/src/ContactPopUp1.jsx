//./assets/plus.svg
import React from 'react';
import './ContactPopUp1.css';
import closeIcon from './assets/plus.svg';

export default function ContactPopUp1({ name, email, phone, onClose, onContinue, opened }) {
  if (!opened) return null;

  return (
    <div className="contact-popup-overlay">
      <div className="Modal">
        <div className="ModalHeader">
          <button className="ExitButton" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <div className="ModalBody">
          <div className="ProjectDescription">
            <div className="Name">
              {name}'s Contact Information:
            </div>
            <div className="ContactInfo">
              {email}<br/>{phone}         
            </div>
          </div>
        </div>
        <div className="ModalFooter">
          <div className="ButtonContainer">
            <div className="ContinueButton" onClick={onContinue}>
              <div className="ContinueButtonText">Continue</div>
            </div>
          </div>
          <div className="PageIndicators">
            <div className="Indicators">
              <div className="RectangleLeft"></div>
              <div className="RectangleRight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}