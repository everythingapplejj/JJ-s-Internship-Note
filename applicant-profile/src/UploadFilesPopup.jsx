import React, { useState } from 'react';
import './UploadFilesPopup.css'
import Download from './assets/bars-outline.svg'
import Close from './assets/bars-outline.svg'

export const UploadedFilesPopup = (props) => {
  return (
    (props.opened && 
      <div className="uploaded-files-popup-overlay">
        <div className="uploaded-files-popup">
          <div className="uploaded-files-title">
            Files 
            <button className="uploaded-files-close-button" onClick={() => props.files_togglePopup(false)}>
              <img class="uploaded-files-close-image" src={Close}/>
            </button>
          </div>
          <button className="uploaded-files-documents">Resume <img class = "uploaded-files-download-image" src={Download}/></button>
          <button className="uploaded-files-documents">Disability Document <img class = "uploaded-files-download-image" src={Download}/></button>
          <button className="uploaded-files-documents">Veteran Document <img class = "uploaded-files-download-image" src={Download}/></button>
          <button className="uploaded-files-documents">Ethnicity Document <img class = "uploaded-files-download-image" src={Download}/></button>
          <button className="uploaded-files-documents">Cover Letter <img class = "uploaded-files-download-image" src={Download}/></button>
        </div>
      </div>
    )
  );
};

export default UploadedFilesPopup;