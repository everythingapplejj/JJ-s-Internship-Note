import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ContactPopUp1 from './ContactPopUp1';
import ContactPopUp2 from './ContactPopUp2';
import avatar from './assets/avatar.svg';
import folderOpen from './assets/folder-open.svg';
import calendarIcon from './assets/calendar-month.svg';
import mapPinIcon from './assets/map-pin.svg';
import user from './assets/user.svg';
import grid from './assets/grid.svg';
import users from './assets/users.svg';
import rect from './assets/rectangle-4571.svg';
import add from './assets/plus.svg';
import logout from './assets/arrow-right-to-bracket.svg';
import bars from './assets/bars-outline.svg';
import expandIcon from './assets/expand-outline.svg';
import SingleExperiencePopup from './SingleExperiencePopup';
import SkillsPopup from './SkillsPopup';
import UploadFilesPopup from './UploadFilesPopup';  

//"../../components/PopUps/SkillsPopUp/SkillsPopUp" 
// utilize the above formating

const ItemTypes = {
  JOB: 'job'
};

const JobItem = ({ job, index, moveJob, onExperienceClick }) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.JOB,
    hover(item) {
      if (item.index !== index) {
        moveJob(item.index, index);
        item.index = index;
      }
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.JOB,
    item: { type: ItemTypes.JOB, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`flex items-center justify-between border-b border-gray-200 py-2 cursor-pointer ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      onClick={() => onExperienceClick(job)}
    >
      <span>{job.title}</span>
      <div className="flex items-center">
        <button className="p-1">
          <img src={expandIcon} alt="expand" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const JobExperienceModal = ({ jobs, moveJob, onJobClick, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-auto max-w-md w-full p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">Job Experience</h2>
          <button onClick={onClose}>
            <img src="./assets/x.svg" alt="close" className="w-4 h-4"/>
          </button>
        </div>
        <div>
          {jobs.map((job, index) => (
            <JobItem key={index} index={index} job={job} moveJob={moveJob} onExperienceClick={onJobClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ApplicantProfilePage = () => {
  const [popupState, setPopupState] = useState(null); // 0: No popup, 1: PopUp1, 2: PopUp2
  const [experiencePopup, setExperiencePopup] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState('Unreviewed');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false); // testing... 
  const [jobExperiences, setJobExperiences] = useState([
    { title: "Starbucks Barista", company: "Starbucks", description: "Description for Starbucks Barista", period: "January 2020 - December 2021" },
    { title: "Babysitter", company: "N/A", description: "Description for Babysitter", period: "June 2021 - August 2021" },
    { title: "Applebee’s Waiter", company: "Applebee's", description: "As an Applebee's waiter, I warmly greet guests, guide them through the menu, and take orders accurately. Promptly delivering food and handling transactions are key tasks. I also maintain cleanliness and organization. It's fast-paced, but I enjoy creating memorable experiences for our guests.", period: "January 2022 - June 2023" },
    { title: "Starbucks Cashier", company: "Starbucks", description: "Description for Starbucks Cashier", period: "September 2020 - January 2021" },
    { title: "Camp Counselor", company: "N/A", description: "Description for Camp Counselor", period: "July 2019 - August 2019" },
  ]);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [filesPopupOpen, setFilesPopupOpen] = useState(false);

  const experience_togglePopup = (job) => {
    setExperiencePopup(job);
  };

  const togglePopup = (state) => {
    setPopupState(state);
  };

  const handleContinue = () => {
    setPopupState('contact2');
  };

  const isExperiencePopupOpen = experiencePopup !== null;

  const isPopupOpen = popupState !== null;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const moveJob = (fromIndex, toIndex) => {
    const updatedJobs = [...jobExperiences];
    const [movedItem] = updatedJobs.splice(fromIndex, 1);
    updatedJobs.splice(toIndex, 0, movedItem);
    setJobExperiences(updatedJobs);
  };

  const toggleSkillsVisibility = () => {
    setSkillsVisible(!skillsVisible);
  };

  const openPopUp1 = () => setPopupState(1);

  const closePopup = () => setPopupState(0);

  const updateApplicationStatus = (status) => {
    setApplicationStatus(status);
    closePopup();
  };

  const openJobExperienceModal = () => setShowExperienceModal(true);
  const closeJobExperienceModal = () => setShowExperienceModal(false);
  const openSkillsPopup = () => setShowAllSkills(true);
  const closeSkillsPopup = () => setShowAllSkills(false);
  const toggleShowAllExperience = () => setShowAllExperience(!showAllExperience);

  const openFilesPopup = () => setFilesPopupOpen(true);
  const closeFilesPopup = () => setFilesPopupOpen(false);

  const skills_togglePopup = (state) => {
    setShowAllSkills(!state)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gray-200 min-h-screen flex">
        {/* Sidebar */}
        <div className="w-20 bg-blue-900 text-white flex-none flex flex-col items-center sticky top-0 h-screen py-8">
          <div className="relative inline-block">
            <img src={rect} alt="JobEZ" className="h-12 w-12" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">JobEZ</span>
          </div>

          <div className="flex flex-col items-center mt-20 gap-10">
            <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700 m-6">
              <img src={grid} alt="icon1" className="w-6" />
            </button>

            <div className="flex flex-col gap-5">
              <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
                <img src={add} alt="icon2" className="w-6" />
              </button>
              <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
                <img src={bars} alt="icon3" className="w-6" />
              </button>
              <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
                <img src={users} alt="icon4" className="w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
                <img src={user} alt="icon5" className="w-6" />
              </button>
              <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
                <img src={logout} alt="icon6" className="w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 pr-4">
          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center">
              <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full" />
              <div className="ml-4">
                <h1 className="text-3xl font-bold">{`Joey Smith (He/Him)`}</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg">{`International`}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg">{`Referred`}</span>
                </div>
              </div>
            </div>
            <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center" onClick={openFilesPopup}>
              <img src={folderOpen} alt="folder" className="mr-2" />
              {`View Files`}
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">{`About Applicant Name:`}</h2>
            <p className="text-lg">
              {`Hello! I'm Joey, a passionate barista with over three years of experience. I excel in creating exceptional coffee experiences through my expertise in brewing, dedication to cleanliness, and commitment to outstanding customer service. With a warm smile and a genuine love for coffee, I strive to make each interaction memorable and enjoyable for every customer. I'm excited about the opportunity to bring my skills to your team and contribute to the world of specialty coffee.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">{`Employment Status`}</label>
              <div className="flex items-center border p-2 rounded mt-1 bg-gray-300">{`Employed`}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{`Preferred Hours`}</label>
              <div className="flex items-center border p-2 rounded mt-1 bg-gray-300">{`9am-5pm`}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{`Application Status`}</label>
              <div className="flex items-center border p-2 rounded mt-1 bg-gray-300">{applicationStatus}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{`Spoken Languages`}</label>
              <div className="flex items-center border p-2 rounded mt-1 bg-gray-300">{`English, Spanish`}</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">{`Preferred Days`}</label>
              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  className="w-full border p-2 rounded mt-1 bg-gray-300 cursor-pointer pl-10"
                  placeholderText="Select date"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src={calendarIcon} alt="calendar" className="w-6 h-6 text-gray-500" />
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">{`Location`}</label>
              <div className="flex items-center border p-2 rounded mt-1 bg-gray-300">
                <img src={mapPinIcon} alt="map pin" className="mr-2" />
                {`New York, New York`}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <h2 className="text-2xl font-bold">{`Job Experience`}</h2>
              <div className="bg-white rounded-lg shadow p-2 w-full">
                {jobExperiences.slice(0, showAllExperience ? jobExperiences.length : 3).map((job, index) => (
                  <JobItem key={index} index={index} job={job} moveJob={moveJob} onExperienceClick={experience_togglePopup} />
                ))}
              </div>
              {jobExperiences.length > 3 && (
                <button
                  className="block bg-blue-600 text-white font-bold mt-4 py-2 px-4 rounded w-full"
                  onClick={toggleShowAllExperience}
                >
                  {showAllExperience ? 'Show Less' : 'See All'}
                </button>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold">{`Skills`}</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Teamwork`}</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Serving`}</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Customer Service`}</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Efficiency`}</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Coffee Making`}</span>
                {skillsVisible && (
                  <>
                    <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Leadership`}</span>
                    <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Time Management`}</span>
                    <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Barista Training`}</span>
                    <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">{`Inventory Management`}</span>
                  </>
                )}
              </div>
              <button
                className="block bg-blue-600 text-white font-bold mt-4 py-2 px-4 rounded"
                onClick={() => skills_togglePopup(false)} // fix this later
              >
                {skillsVisible ? `See Less` : `See All`}
              </button>
              <SkillsPopup>
                opened = {showAllSkills} skills_togglePopup = {skills_togglePopup}
              </SkillsPopup>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold">{`Custom Responses:`}</h2>
            <div>
              <h3 className="font-semibold">{`Question 1: How would you describe how you handle difficult customer request while maintaining quality service?`}</h3>
              <p>{`I prioritize active listening to understand the customer's needs thoroughly, ensuring a tailored solution that upholds our service standards without compromising quality.`}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">{`Question 2: How do you prioritize tasks during busy periods to ensure efficient service for our customers?`}</h3>
              <p>{`During busy periods, I prioritize tasks based on urgency and impact on customer experience, utilizing time-management strategies to ensure efficient service delivery without sacrificing quality.`}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-blue-700 text-white font-bold py-3 px-12 rounded-full" onClick={() => togglePopup('contact1')} disabled={isPopupOpen}>
              <span>{`View Contact Info`}</span>
            </button>
          </div>

          {popupState === 'contact1' && (
            <ContactPopUp1
              name="John Doe"
              email="john.doe@example.com"
              phone="+1234567890"
              onClose={() => togglePopup(null)}
              onContinue={handleContinue}
              opened={popupState === 'contact1'}
            />
          )}
          {popupState === 'contact2' && (
            <ContactPopUp2
              name="John Doe"
              onClose={() => togglePopup(null)}
              onStatusSelect={updateApplicationStatus}
              opened={popupState === 'contact2'}
            />
          )}

          {isExperiencePopupOpen && (
            <SingleExperiencePopup
              title={experiencePopup.title}
              company={experiencePopup.company}
              period={experiencePopup.period}
              description={experiencePopup.description}
              onClose={() => setExperiencePopup(null)}
            />
          )}

          {showExperienceModal && (
            <JobExperienceModal
              jobs={jobExperiences}
              moveJob={moveJob}
              onJobClick={experience_togglePopup}
              onClose={closeJobExperienceModal}
            />
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default ApplicantProfilePage;
