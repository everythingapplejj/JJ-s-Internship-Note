import './Listing.css'

export default function Listing() {
  return (
    <div className="listing">
      <img className="vector-3" src="assets/vectors/Unknown" />
      <div className="container-2">
        <div className="container-3">
          <div className="start-outline">
            <img className="vector-6" src="assets/vectors/Unknown" />
          </div>
          <span className="listing-title">
          Listing Title
          </span>
        </div>
        <div className="container-1">
          <div className="company-info">
            <img className="basilimage-outline" src="assets/vectors/Unknown" />
            <div className="company">
            Company
            </div>
          </div>
          <div className="pay-tag">
            <div className="iconoirdollar">
              <img className="vector-2" src="assets/vectors/Unknown" />
            </div>
            <span className="pay-rate">
            Pay rate
            </span>
          </div>
        </div>
        <div className="container">
          <div className="listing-description">
          Listing Description
          </div>
          <div className="container-4">
            <div className="location-tag">
              <img className="ionlocation" src="assets/vectors/Unknown" />
            </div>
            <div className="week">
              <div className="day">
                <span className="s">
                S
                </span>
              </div>
              <div className="day-1">
                <span className="m">
                M
                </span>
              </div>
              <div className="day-2">
                <div className="ellipse-162">
                </div>
                <span className="t">
                T
                </span>
              </div>
              <div className="day-3">
                <span className="w">
                W
                </span>
              </div>
              <div className="day-4">
                <div className="ellipse-164">
                </div>
                <span className="r">
                R
                </span>
              </div>
              <div className="day-5">
                <span className="f">
                F
                </span>
              </div>
              <div className="day-6">
                <span className="s-1">
                S
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="apply-button">
          <span className="apply">
          Apply
          </span>
        </div>
      </div>
      <span className="hours">
      Hours
      </span>
      <span className="location">
      Location
      </span>
    </div>
  )
}