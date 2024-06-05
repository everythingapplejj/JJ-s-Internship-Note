import './EmployerLogoutPopup.css'

export default function EmployerLogoutPopup() {
  return (
    <div className="employer-logout-popup">
      <div className="web-bar">
        <div className="container-1">
          <div className="action-bttn">
            <div className="close-btn">
            </div>
            <div className="restore-btn">
            </div>
            <div className="minimize-btn">
            </div>
          </div>
          <div className="prev-btn">
            <img className="arrow" src="assets/vectors/Unknown" />
          </div>
          <div className="prev-btn-2">
            <img className="arrow-1" src="assets/vectors/Unknown" />
          </div>
          <img className="option-btn" src="assets/vectors/Unknown" />
        </div>
        <div className="address-bar">
          <div className="safaribrowser">
          safaribrowser
          </div>
          <img className="refresh" src="assets/vectors/Unknown" />
        </div>
        <div className="container-2">
          <div className="share-btn">
            <img className="share" src="assets/vectors/Unknown" />
          </div>
          <div className="view-search-btn">
            <img className="view" src="assets/vectors/Unknown" />
          </div>
          <img className="add-btn" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="container">
        <div className="modal">
          <div className="modal-header">
            <img className="vector-2" src="assets/vectors/Unknown" />
          </div>
          <div className="modal-body">
            <div className="exclamation">
              <img className="vector-3" src="assets/vectors/Unknown" />
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
      </div>
    </div>
  )
}