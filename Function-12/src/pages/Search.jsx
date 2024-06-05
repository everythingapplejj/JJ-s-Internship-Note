import './Search.css'

export default function Search() {
  return (
    <div className="search">
      <div className="left-content">
        <div className="flags-us">
          <img className="container" src="assets/vectors/Unknown" />
        </div>
        <span className="usa">
        USA
        </span>
        <div className="chevron-down">
          <img className="vector" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="line-2">
      </div>
      <div className="frame-13">
        <span className="search-for-city">
        Search for city
        </span>
      </div>
    </div>
  )
}