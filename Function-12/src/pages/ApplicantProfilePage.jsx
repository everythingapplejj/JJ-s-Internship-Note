import React from "react";
  import { Avatar } from "./Avatar";
import { Button } from "./Button";
//import { CalendarMonth } from "./CalendarMonth";
//import { ExpandOutline } from "./ExpandOutline";
//import { FolderOpen } from "./FolderOpen";
import { InputNumber } from "./InputNumber";
//import { MapPin } from "./MapPin";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="body">
        <div className="content">
          <header className="header">
            <div className="applicant-deets">
              <div className="overlap-group">
                <div className="badge">
                  <div className="text-wrapper">Referred</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper">International</div>
                </div>
                <div className="profile-deets">
                  <p className="joey-smith-he-him">
                    <span className="span">Joey Smith </span>
                    <span className="text-wrapper-2">(He/Him)</span>
                  </p>
                  <Avatar className="avatar-instance" placeholder={false} size="LG" type="circle" />
                </div>
              </div>
            </div>
            <Button
              buttonText="View Files"
              className="button-instance"
              color="primary"
              icon={<FolderOpen className="folder-open" color="white" />}
              iconOnly={false}
              outline={false}
              showRightIcon={false}
              size="l"
              state="default"
            />
          </header>
          <div className="about">
            <p className="about-body">
              Hello! I&#39;m Joey, a passionate barista with over three years of experience. I excel in creating
              exceptional coffee experiences through my expertise in brewing, dedication to cleanliness, and commitment
              to outstanding customer service. With a warm smile and a genuine love for coffee, I strive to make each
              interaction memorable and enjoyable for every customer. I&#39;m excited about the opportunity to bring my
              skills to your team and contribute to the world of specialty coffee.
            </p>
            <div className="about-applicant">About Applicant Name:</div>
          </div>
          <div className="div">
            <div className="applicant">
              <InputNumber
                className="input-number-instance"
                darkMode={false}
                divClassName="design-component-instance-node"
                divClassNameOverride="input-number-3"
                inputClassName="input-number-2"
                labelText="Employment Status"
                placeholderText="Employed"
                showHelperText={false}
                showLeftIcon={false}
                showRightIcon={false}
                size="small"
                state="initial"
                type="default"
              />
              <InputNumber
                className="input-number-4"
                darkMode={false}
                divClassName="design-component-instance-node"
                divClassNameOverride="input-number-3"
                inputClassName="input-number-2"
                labelText="Application Status"
                placeholderText="Unreviewed"
                showHelperText={false}
                showLeftIcon={false}
                showRightIcon={false}
                size="small"
                state="initial"
                type="default"
              />
            </div>
            <div className="preferred-timing">
              <InputNumber
                className="input-number-5"
                darkMode={false}
                divClassName="design-component-instance-node"
                divClassNameOverride="input-number-3"
                inputClassName="input-number-2"
                labelText="Preferred Hours"
                placeholderText="9am-5pm"
                showHelperText={false}
                showLeftIcon={false}
                showRightIcon={false}
                size="small"
                state="initial"
                type="default"
              />
              <div className="div-2">
                <div className="text-wrapper-3">Preferred Days</div>
                <div className="datepicker">
                  <div className="content-2">
                    <CalendarMonth className="calendar-month" />
                    <div className="text-wrapper-4">Select period</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="preferred-timing">
              <InputNumber
                className="input-number-5"
                darkMode={false}
                divClassName="design-component-instance-node"
                divClassNameOverride="input-number-3"
                icon={<MapPin className="icon-instance-node-2" />}
                inputClassName="input-number-2"
                labelText="Location"
                placeholderText="New York, New York"
                showHelperText={false}
                showRightIcon={false}
                size="small"
                state="initial"
                type="default"
              />
              <InputNumber
                className="input-number-5"
                darkMode={false}
                divClassName="design-component-instance-node"
                divClassNameOverride="input-number-3"
                inputClassName="input-number-2"
                labelText="Spoken Languages"
                placeholderText="English, Spanish"
                showHelperText={false}
                showLeftIcon={false}
                showRightIcon={false}
                size="small"
                state="initial"
                type="default"
              />
            </div>
          </div>
          <div className="experience-and">
            <div className="div-3">
              <div className="experience">
                <p className="relevant-experience">
                  <span className="text-wrapper-5">
                    Job Experience:
                    <br />
                  </span>
                  <span className="text-wrapper-6">
                    <br />
                    <br />
                    <br />
                    <br />
                  </span>
                  <span className="text-wrapper-7">See all</span>
                </p>
                <div className="list">
                  <div className="div-4">
                    <div className="list-item">
                      <div className="content-3">
                        <div className="suporting-text">Starbucks Barista</div>
                        <ExpandOutline className="icon-instance-node-2" color="#111928" />
                      </div>
                    </div>
                    <div className="div-4">
                      <div className="border-t" />
                      <div className="content-3">
                        <div className="suporting-text">Babysitter</div>
                        <ExpandOutline className="icon-instance-node-2" color="#111928" />
                      </div>
                    </div>
                    <div className="div-4">
                      <div className="border-t" />
                      <div className="content-3">
                        <div className="suporting-text">Applebee’s Waiter</div>
                        <ExpandOutline className="icon-instance-node-2" color="#111928" />
                      </div>
                    </div>
                    <div className="div-4">
                      <div className="border-t" />
                      <div className="content-3">
                        <div className="suporting-text">Starbucks Cashier</div>
                        <ExpandOutline className="icon-instance-node-2" color="#111928" />
                      </div>
                    </div>
                    <div className="div-4">
                      <div className="border-t" />
                      <div className="content-3">
                        <div className="suporting-text">Camp Counselor</div>
                        <ExpandOutline className="icon-instance-node-2" color="#111928" />
                      </div>
                    </div>
                    <div className="div-4">
                      <div className="border-t" />
                      <div className="content-3">
                        <div className="suporting-text-2">See all</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills">
                <div className="skills-2">Skills:</div>
                <div className="div-5">
                  <div className="div-6">
                    <div className="badge-2">
                      <div className="text-2">Teamwork</div>
                    </div>
                  </div>
                  <div className="div-7">
                    <div className="badge-2">
                      <div className="text-2">Serving</div>
                    </div>
                  </div>
                  <div className="div-7">
                    <div className="badge-2">
                      <div className="text-3">Customer Service</div>
                    </div>
                  </div>
                  <div className="badge-2">
                    <div className="text-2">Effeciency</div>
                  </div>
                  <div className="badge-2">
                    <div className="text-2">Coffee Making</div>
                  </div>
                  <button className="button-2">
                    <div className="text-4">See all</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="custom">
            <p className="p">
              <span className="span">
                Custom Responses:
                <br />
                <br />
              </span>
              <span className="text-wrapper-8">Question 1:</span>
              <span className="text-wrapper-9">
                {" "}
                How would you describe how you handle difficult customer request while maintaining quality service?
                <br />
              </span>
              <span className="text-wrapper-8">Response:</span>
              <span className="text-wrapper-9">
                {" "}
                I prioritize active listening to understand the customer&#39;s needs thoroughly, ensuring a tailored
                solution that upholds our service standards without compromising quality.
                <br />
              </span>
              <span className="text-wrapper-8">Question 2:</span>
              <span className="text-wrapper-9">
                {" "}
                How do you prioritize tasks during busy periods to ensure efficient service for our customers?
                <br />
              </span>
              <span className="text-wrapper-8">Response:</span>
              <span className="text-wrapper-9">
                {" "}
                During busy periods, I prioritize tasks based on urgency and impact on customer experience, utilizing
                time-management strategies to ensure efficient service delivery without sacrificing quality.
              </span>
            </p>
          </div>
        </div>
        <div className="bar">
          <div className="text-5">
            <div className="text-6">Applied to: Listing Title</div>
          </div>
        </div>
      </div>
    </div>
  );
};