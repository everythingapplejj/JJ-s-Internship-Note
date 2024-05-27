import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ApplicantProfilePagePopup from './popup';
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
import expandIcon from './assets/expand-outline.svg'; // example expand icon
import deleteIcon from './assets/prev-btn.svg'; // example delete icon, not used anymore

const ItemTypes = {
  JOB: 'job',
};

const JobItem = ({ job, index, moveJob }) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.JOB,
    hover(item) {
      if (item.index !== index) {
        moveJob(item.index, index);
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.JOB,
    item: { type: ItemTypes.JOB, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`flex items-center justify-between border-b border-gray-200 py-2 ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <span>{job}</span>
      <div className="flex items-center">
        <button className="p-1">
          <img src={expandIcon} alt="expand" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const ApplicantProfilePage = () => {
  const [popupState, setPopupState] = useState(0); // 0: No popup, 1: PopUp1, 2: PopUp2
  const [selectedDate, setSelectedDate] = useState(null);
  const [jobExperiences, setJobExperiences] = useState([
    "Starbucks Barista",
    "Babysitter",
    "Applebee’s Waiter",
    "Starbucks Cashier",
    "Camp Counselor"
  ]);
  const [skillsVisible, setSkillsVisible] = useState(false);

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
  const continueToPopUp2 = () => setPopupState(2);
  const closePopup = () => setPopupState(0);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gray-200 min-h-screen flex">
        {/* Sidebar */}
        {/*The Logo Section*/}
        <div className="w-20 bg-blue-900 text-white flex-none flex flex-col items-center sticky top-0 h-screen py-8">
          <div className="relative inline-block">
            <img src={rect} alt="JobEZ" className="h-12 w-12" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">JobEZ</span>
          </div>
          
          {/* The icon sections */}
          <div className="flex flex-col items-center mt-20 gap-10">
            <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700 m-6">
              <img src={grid} alt="icon1" className="w-6" />
            </button>

            {/* Grouping icons 2, 3, and 4 close together */}
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

            {/* Grouping icons 5 and 6 close together */}
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
          {/* Header */}
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
            <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <img src={folderOpen} alt="folder" className="mr-2" />
              {`View Files`}
            </button>
          </div>

          {/* About Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">{`About Applicant Name:`}</h2>
            <p className="text-lg">
              {`Hello! I'm Joey, a passionate barista with over three years of experience. I excel in creating exceptional coffee experiences through my expertise in brewing, dedication to cleanliness, and commitment to outstanding customer service. With a warm smile and a genuine love for coffee, I strive to make each interaction memorable and enjoyable for every customer. I'm excited about the opportunity to bring my skills to your team and contribute to the world of specialty coffee.`}
            </p>
          </div>

          {/* Details Section */}
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
              <div className="flex items-center border p-2 rounded mt-1 bg-gray-300">{`Unreviewed`}</div>
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

          {/* Job Experience and Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <h2 className="text-2xl font-bold">{`Job Experience`}</h2>
              <div className="bg-white rounded-lg shadow p-2 w-full">
                {jobExperiences.map((job, index) => (
                  <JobItem key={index} index={index} job={job} moveJob={moveJob} />
                ))}
              </div>
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
                onClick={toggleSkillsVisibility}
              >
                {skillsVisible ? `See Less` : `See All`}
              </button>
            </div>
          </div>

          {/* Custom Responses */}
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

          {/* Footer Button */}
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-700 text-white font-bold py-3 px-12 rounded-full"
              onClick={openPopUp1}
            >
              {`View Contact Info`}
            </button>
          </div>
        </div>

        {popupState !== 0 && (
          <ApplicantProfilePagePopup
            name="John Doe"
            email="johndoe@example.com"
            phone="123-456-7890"
            popupState={popupState}
            closePopup={closePopup}
            continueToPopUp2={continueToPopUp2}
          />
        )}
      </div>
    </DndProvider>
  );
};

export default ApplicantProfilePage;
