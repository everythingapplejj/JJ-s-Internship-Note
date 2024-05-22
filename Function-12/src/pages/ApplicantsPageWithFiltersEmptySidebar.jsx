import './ApplicantsPageWithFiltersEmptySidebar.css'

export default function ApplicantsPageWithFiltersEmptySidebar() {
  return (
    <div className="applicants-page-with-filters-empty-sidebar">
      <div className="browser-bar">
        <div className="container-5">
          <div className="action-bttn">
            <div className="close-btn">
            </div>
            <div className="restore-btn">
            </div>
            <div className="minimize-btn">
            </div>
          </div>
          <div className="prev-btn">
            <img className="arrow" src="assets/vectors/Unknown" />
          </div>
          <div className="prev-btn-2">
            <img className="arrow-1" src="assets/vectors/Unknown" />
          </div>
          <img className="option-btn" src="assets/vectors/Unknown" />
        </div>
        <div className="address-bar">
          <div className="safaribrowser">
          safaribrowser
          </div>
          <img className="refresh" src="assets/vectors/Unknown" />
        </div>
        <div className="container-3">
          <div className="share-btn">
            <img className="share" src="assets/vectors/Unknown" />
          </div>
          <div className="view-search-btn">
            <img className="view" src="assets/vectors/Unknown" />
          </div>
          <img className="add-btn" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="container-2">
        <div className="sidebar">
          <div className="sidebar-free-component">
            <div className="rectangle-148">
            </div>
            <div className="frame-1000004349">
              <div className="frame-1000004346">
                <div className="overview">
                  <span className="pages">
                  Overview
                  </span>
                </div>
                <div className="list">
                  <div className="list-item">
                    <div className="grid">
                      <img className="vector-7" src="assets/vectors/Unknown" />
                    </div>
                    <span className="suporting-text">
                    Dashboard
                    </span>
                  </div>
                  <div className="list-item-1">
                    <div className="container">
                      <div className="bell">
                        <img className="vector-8" src="assets/vectors/Unknown" />
                      </div>
                      <span className="suporting-text-1">
                      Notifications
                      </span>
                    </div>
                    <div className="indicators">
                      <span className="container">
                      8
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-1000004347">
                <div className="manage-listings">
                  <span className="pages-1">
                  Manage Listings
                  </span>
                </div>
                <div className="list-1">
                  <div className="list-item-2">
                    <div className="plus">
                      <img className="vector-9" src="assets/vectors/Unknown" />
                    </div>
                    <span className="suporting-text-2">
                    Post a Job
                    </span>
                  </div>
                  <div className="list-item-3">
                    <div className="bars-outline">
                      <img className="vector-10" src="assets/vectors/Unknown" />
                    </div>
                    <span className="suporting-text-3">
                    My Listings
                    </span>
                  </div>
                  <div className="list-item-4">
                    <div className="users">
                      <img className="vector-11" src="assets/vectors/Unknown" />
                    </div>
                    <span className="suporting-text-4">
                    Applicants
                    </span>
                  </div>
                </div>
              </div>
              <div className="frame-1000004348">
                <div className="manage-account">
                  <span className="pages-2">
                  Manage Account
                  </span>
                </div>
                <div className="list-2">
                  <div className="list-item-5">
                    <div className="user">
                      <img className="vector-12" src="assets/vectors/Unknown" />
                    </div>
                    <span className="suporting-text-5">
                    My Account
                    </span>
                  </div>
                  <div className="list-item-6">
                    <div className="arrow-right-to-bracket">
                      <img className="vector-13" src="assets/vectors/Unknown" />
                    </div>
                    <span className="suporting-text-6">
                    Logout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="group-1010" src="assets/vectors/Unknown" />
        </div>
        <div className="frame-1000004340">
          <div className="group-1011">
            <div className="navbar">
              <div className="container-1">
                <div className="logo">
                  <span className="applicants">
                  Applicants
                  </span>
                </div>
                <div className="nav-links">
                  <span className="text">
                  Listing 3
                  </span>
                  <div className="angle-down-outline">
                    <img className="vector-4" src="assets/vectors/Unknown" />
                  </div>
                </div>
              </div>
              <div className="sort-outline">
                <img className="vector-5" src="assets/vectors/Unknown" />
              </div>
            </div>
            <div className="filter">
              <div className="container-4">
                <div className="filter-1">
                Filter
                </div>
                <div className="dropdown-buttons-1">
                  <div className="button-1">
                    <span className="text-2">
                    Application Status
                    </span>
                    <div className="chevron-down-1">
                      <img className="vector-3" src="assets/vectors/Unknown" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown-buttons">
                <div className="button">
                  <span className="text-1">
                  Employment Status
                  </span>
                  <div className="chevron-down">
                    <img className="vector-2" src="assets/vectors/Unknown" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="alerts">
            <div className="description">
              <div className="title">
                <span className="title-1">
                Uh-Oh
                </span>
                <div className="x">
                  <img className="vector-6" src="assets/vectors/Unknown" />
                </div>
              </div>
              <span className="aww-yeah-you-successfully-read-this-important-alert-message-this-example-text-is-going-to-run-abit-longer-so-that-you-can-see-how-spacing-within-an-alert-works-with-this-kind-of-content">
              There are currently no applicants for this listing. If you think there might be an error reupload the listing or contact us.
              </span>
            </div>
            <div className="button-2">
              <span className="text-3">
              Don’t Show Again
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}