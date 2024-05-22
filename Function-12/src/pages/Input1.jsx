import './Input1.css'

export default function Input1() {
  return (
    <div className="input">
      <div className="button">
        <div className="flags-us">
          <img className="container" src="assets/vectors/Unknown" />
        </div>
        <span className="text">
        USA
        </span>
        <div className="chevron-down">
          <img className="vector" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="input-1">
        <span className="placeholder">
        Regular Select
        </span>
        <div className="chevron-down-1">
          <img className="vector-1" src="assets/vectors/Unknown" />
        </div>
      </div>
    </div>
  )
}