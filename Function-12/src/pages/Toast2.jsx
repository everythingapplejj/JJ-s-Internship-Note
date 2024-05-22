import './Toast2.css'

export default function Toast2() {
  return (
    <div className="toast">
      <div className="title-close-button">
        <span className="title">
        New notofication
        </span>
        <div className="x">
          <img className="vector" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="avatar-text">
        <div className="avatar">
          <div className="avatar-1">
          </div>
        </div>
        <div className="text-cta">
          <div className="heading-text">
            <span className="title-1">
            Bonnie Green
            </span>
            <span className="message">
            commented on your photo
            </span>
          </div>
          <span className="message-1">
          a few seconds ago
          </span>
        </div>
      </div>
    </div>
  )
}