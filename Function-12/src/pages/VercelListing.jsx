import './VercelListing.css'

export default function VercelListing() {
  return (
    <div className="vercel-listing">
      <div className="container-1">
        <div className="star">
          <img className="vector-9" src="assets/vectors/Unknown" />
        </div>
        <span className="listing-title">
        Listing Title
        </span>
      </div>
      <div className="container">
        <div className="container-3">
          <div className="company-info">
            <img className="frame" src="assets/vectors/Unknown" />
            <div className="company">
            Company
            </div>
          </div>
          <span className="listing-description">
          Listing Description
          </span>
        </div>
        <div className="container-2">
          <div className="container-4">
            <div className="pay-tag">
              <img className="pay-icon" src="assets/vectors/Unknown" />
              <div className="pay-rate">
              Pay rate
              </div>
            </div>
            <img className="location-icon" src="assets/vectors/Unknown" />
            <div className="table-head">
              <div className="table-head-1">
                <span className="s">
                S
                </span>
              </div>
              <div className="table-head-2">
                <span className="m">
                M
                </span>
              </div>
              <div className="table-head-3">
                <span className="t">
                T
                </span>
              </div>
              <div className="table-head-4">
                <span className="w">
                W
                </span>
              </div>
              <div className="table-head-5">
                <span className="t-1">
                T
                </span>
              </div>
              <div className="table-head-6">
                <span className="f">
                F
                </span>
              </div>
              <div className="table-head-7">
                <span className="s-1">
                S
                </span>
              </div>
            </div>
          </div>
          <div className="hours-tag">
            <img className="frame-1" src="assets/vectors/Unknown" />
            <span className="hours">
            Hours
            </span>
          </div>
          <span className="location">
          Location
          </span>
        </div>
      </div>
      <div className="apply-button">
        <div className="button">
          <span className="label">
          Apply
          </span>
        </div>
      </div>
    </div>
  )
}