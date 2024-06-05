import React from 'react';
import ContactPopUp1 from './ContactPopUp1';
import ContactPopUp2 from './ContactPopUp2';

const ApplicantProfilePagePopup = ({ name, email, phone, popupState, closePopup, continueToPopUp2 }) => {
  return (
    <>
      {popupState === 1 && (
        <ContactPopUp1
          name={name}
          email={email}
          phone={phone}
          onClose={closePopup}
          onContinue={continueToPopUp2}
        />
      )}
      {popupState === 2 && (
        <ContactPopUp2
          name={name}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default ApplicantProfilePagePopup;