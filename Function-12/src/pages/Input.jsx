import './Input.css'

export default function Input() {
  return (
    <div className="input">
      <div className="label">
      Select language
      </div>
      <div className="input-1">
        <span className="placeholder">
        Regular Select
        </span>
        <div className="chevron-down">
          <img className="vector" src="assets/vectors/Unknown" />
        </div>
      </div>
    </div>
  )
}