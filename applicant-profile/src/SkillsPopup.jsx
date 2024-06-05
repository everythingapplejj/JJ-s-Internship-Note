import React, { useState } from 'react';
import './SkillsPopup.css'
import CloseButton from './assets/grid.svg'


export const SkillsPopup = (props) => {
  {/*Dummy Skills Lists*/}
  const relevantSkills = ["Teamwork", "Serving", "Efficiency", "Customer Service", "Coffee Making"]
  const allSkills = ["Childcare", "Time Management", "Honest", "Stamina", "Patient"]

  return (
    (props.opened && 
      <div className="popup-overlay">
        <div className="popup">
          
          <div className="title">
            Skills 
            <button className="close-button" onClick={() => props.skills_togglePopup(true)}>
              <img class="close-image" src={CloseButton}/>
            </button>
          </div>

          <div className="relevant-skills-container">
            Relevant Skills
            <div className="skills">
              {relevantSkills.map((skill)=>{
                return(
                  <div className="skill">
                    {skill}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="all-skills-container">
            All Skill
            <div className="skills">
              {allSkills.map((skill)=>{
                return(
                  <div className="skill">
                    {skill}
                  </div>
                )
              })}
            </div>
          </div>
 
        </div>
      </div>
    )
  );
};

export default SkillsPopup;