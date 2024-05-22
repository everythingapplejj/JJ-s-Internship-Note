import './Tag.css'

export default function Tag() {
  return (
    <div className="tag">
      <div className="label">
      Tags
      </div>
      <div className="input">
        <div className="user">
          <span className="text">
          bonnie.green@company.com
          </span>
          <div className="x">
            <img className="vector" src="assets/vectors/Unknown" />
          </div>
        </div>
        <div className="user-1">
          <span className="text-1">
          jese.leos@company.com
          </span>
          <div className="x-1">
            <img className="vector-1" src="assets/vectors/Unknown" />
          </div>
        </div>
      </div>
    </div>
  )
}