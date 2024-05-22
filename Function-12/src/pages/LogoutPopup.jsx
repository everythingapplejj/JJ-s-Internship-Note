import './LogoutPopup.css'

export default function LogoutPopup() {
  return (
    <div className="logout-popup">
      <div className="modal-header">
        <img className="vector" src="assets/vectors/Unknown" />
      </div>
      <div className="modal-body">
        <div className="exclamation">
          <img className="vector-1" src="assets/vectors/Unknown" />
        </div>
        <div className="project-description">
          <span className="next-friday-should-b">
          Are you sure you want to log out?
          </span>
        </div>
      </div>
      <div className="modal-footer">
        <div className="button">
          <span className="text">
          Yes, I’m sure
          </span>
        </div>
        <div className="button-1">
          <span className="text-1">
          No, cancel
          </span>
        </div>
      </div>
    </div>
  )
}