import './Property1Selected.css'

export default function Property1Selected() {
  return (
    <div className="property-1-selected">
      <div className="heading-3">
        <div className="main-info">
          <div className="avatar">
          </div>
          <div className="heading-text">
            <div className="heading-4">
            Applicant Name
            </div>
            <p className="text-6">
            <span className="text-6-sub-1"></span><span></span>
            </p>
          </div>
        </div>
        <div className="buttons">
          <div className="button">
            <img className="vector" src="assets/vectors/Unknown" />
          </div>
          <div className="button-1">
            <span className="text-7">
            View Profile
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="checkbox">
          <div className="checkbox-1">
            <img className="vector-1" src="assets/vectors/Unknown" />
          </div>
        </div>
        <div className="text-info">
          <div className="application-status">
            <div className="heading">
            Application Status
            </div>
            <div className="frame-1000004317">
              <p className="text">
              <span className="text-sub-5"></span><span></span>
              </p>
              <span className="text-1">
              Reviewed
              </span>
            </div>
          </div>
          <div className="recent-experience">
            <div className="heading-1">
            Recent Experience
            </div>
            <div className="frame-1000004318">
              <span className="text-2">
              Job title
              </span>
              <span className="text-3">
              8/2017-Present
              </span>
            </div>
          </div>
          <div className="languages-spoken">
            <div className="heading-2">
            Language Spoken
            </div>
            <div className="frame-10000043181">
              <span className="text-4">
              Primary: English
              </span>
              <span className="text-5">
              Secondaries: Spanish
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}