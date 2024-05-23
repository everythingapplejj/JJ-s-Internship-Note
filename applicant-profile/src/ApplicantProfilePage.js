// src/ApplicantProfilePage.js
import React from 'react';
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

const ApplicantProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        {/* Sidebar */}
        <div className="w-20 bg-blue-900 text-white flex flex-col items-center py-8 min-h-screen">
          <div className="relative inline-block">
            <img src={rect} alt="JobEZ" className="h-12 w-12" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
            JobEZ
            </span>
          </div>

        <div className="flex flex-col items-center mt-20">
          <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg mb-8 hover:bg-blue-700">
            <img src = {grid} alt="icon1" className="w-6" />
          </button>
    
        <div className="flex flex-col gap-0 items-center mt-20">
          <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
            <img src = {add} alt="icon2" className="w-6" />
          </button>
          <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
            <img src = {bars}  alt="icon3" className="w-6" />
          </button>
          <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
            <img src = {users} alt="icon4" className="w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-0 mt-20">
          <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
            <img src= {user} alt="icon5" className="w-6" />
            </button>
          <button className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded shadow-lg hover:bg-blue-700">
            <img src= {logout} alt="icon6" className="w-6" />
           </button>
        </div>
      </div>
    </div>

        {/* Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center">
              <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full" />
              <div className="ml-4">
                <h1 className="text-3xl font-bold">Joey Smith (He/Him)</h1>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg">International</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg">Referred</span>
                </div>
              </div>
            </div>
            <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <img src={folderOpen} alt="folder" className="mr-2" />
              View Files
            </button>
          </div>
          
          {/* About Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">About Applicant Name:</h2>
            <p className="text-lg">
              Hello! I'm Joey, a passionate barista with over three years of experience. I excel in creating exceptional coffee experiences through my expertise in brewing, dedication to cleanliness, and commitment to outstanding customer service. With a warm smile and a genuine love for coffee, I strive to make each interaction memorable and enjoyable for every customer. I'm excited about the opportunity to bring my skills to your team and contribute to the world of specialty coffee.
            </p>
          </div>
          
          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Employment Status</label>
              <div className="border p-2 rounded mt-1 bg-gray-200">Employed</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Hours</label>
              <div className="border p-2 rounded mt-1 bg-gray-200">9am-5pm</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Application Status</label>
              <div className="border p-2 rounded mt-1 bg-gray-200">Unreviewed</div>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mt-1">Spoken Languages</label>
              <div className="border p-2 rounded mt-1 bg-gray-200">English, Spanish</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Preferred Days</label>
              <div className="flex items-center border p-2 rounded mt-1 bg-gray-200">
                <img src={calendarIcon} alt="calendar" className="mr-2" />
                Select period
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <div className="flex items-center border p-2 rounded mt-1 bg-gray-200">
                <img src={mapPinIcon} alt="map pin" className="mr-2" />
                New York, New York
              </div>
            </div>
          </div>
          
          {/* Job Experience and Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <h2 className="text-2xl font-bold">Job Experience</h2>
              <ul className="list-disc list-inside">
                <li>Starbucks Barista</li>
                <li>Babysitter</li>
                <li>Applebee’s Waiter</li>
                <li>Starbucks Cashier</li>
                <li>Camp Counselor</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Skills</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">Teamwork</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">Serving</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">Customer Service</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">Efficiency</span>
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg">Coffee Making</span>
              </div>
              <button className="block bg-blue-600 text-white font-bold mt-4 py-2 px-4 rounded">See all</button>
            </div>
          </div>
          
          {/* Custom Responses */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Custom Responses:</h2>
            <div>
              <h3 className="font-semibold">Question 1: How would you describe how you handle difficult customer request while maintaining quality service?</h3>
              <p>I prioritize active listening to understand the customer's needs thoroughly, ensuring a tailored solution that upholds our service standards without compromising quality.</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Question 2: How do you prioritize tasks during busy periods to ensure efficient service for our customers?</h3>
              <p>During busy periods, I prioritize tasks based on urgency and impact on customer experience, utilizing time-management strategies to ensure efficient service delivery without sacrificing quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-700 text-white font-bold py-3 px-12 rounded-full">View Contact Info</button>
      </div>
      
    </div>
  );
};

export default ApplicantProfilePage;
