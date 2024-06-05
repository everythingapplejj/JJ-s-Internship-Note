import './InputNumber.css'

export default function InputNumber() {
  return (
    <div className="input-number">
      <div className="label">
      Label
      </div>
      <div className="input">
        <div className="button">
          <div className="flags-us">
            <img className="container" src="assets/vectors/Unknown" />
          </div>
          <span className="text">
          +1
          </span>
          <div className="chevron-down-outline">
            <img className="vector" src="assets/vectors/Unknown" />
          </div>
        </div>
        <div className="input-1">
          <span className="container">
          123 4567 890
          </span>
        </div>
      </div>
      <span className="caption">
      Enter a number between 0 and 9
      </span>
    </div>
  )
}