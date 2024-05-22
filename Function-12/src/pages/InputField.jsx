import './InputField.css'

export default function InputField() {
  return (
    <div className="input-field">
      <div className="label">
      First name
      </div>
      <div className="input">
        <div className="container">
          <div className="user">
            <img className="vector" src="assets/vectors/Unknown" />
          </div>
          <span className="input-text">
          Input text
          </span>
        </div>
        <div className="x">
          <img className="vector-1" src="assets/vectors/Unknown" />
        </div>
      </div>
      <p className="caption">
      <span className="caption-sub-7"></span><span></span>
      </p>
    </div>
  )
}