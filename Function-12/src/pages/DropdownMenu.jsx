import './DropdownMenu.css'

export default function DropdownMenu() {
  return (
    <div className="dropdown-menu">
      <div className="nav-link">
        <div className="folder-plus">
          <img className="vector-1" src="assets/vectors/Unknown" />
        </div>
        <span className="text">
        Interviewing
        </span>
      </div>
      <div className="nav-link-1">
        <div className="thumbs-up">
          <img className="vector-3" src="assets/vectors/Unknown" />
        </div>
        <span className="text-1">
        Offer received
        </span>
      </div>
      <div className="nav-link-2">
        <div className="xcircle">
          <img className="vector" src="assets/vectors/Unknown" />
        </div>
        <span className="text-2">
        Not selected
        </span>
      </div>
      <div className="nav-link-3">
        <div className="thumbs-down">
          <img className="vector-2" src="assets/vectors/Unknown" />
        </div>
        <span className="text-3">
        No longer interested
        </span>
      </div>
    </div>
  )
}