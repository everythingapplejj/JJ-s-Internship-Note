import './Notifications.css'

export default function Notifications() {
  return (
    <div className="notifications">
      <div className="header">
        <span className="label-time">
        1h ago
        </span>
        <div className="container">
          <img className="icon-60" src="assets/vectors/Unknown" />
          <div className="label-app-name">
          Jobez
          </div>
        </div>
      </div>
      <div className="content">
        <span className="label-content">
        New Applicant to listing “Listing name”!
        </span>
      </div>
    </div>
  )
}