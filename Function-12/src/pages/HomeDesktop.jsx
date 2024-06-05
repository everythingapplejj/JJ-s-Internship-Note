import './HomeDesktop.css'

export default function HomeDesktop() {
  return (
    <div className="home-desktop">
      <div className="navbar-desktop">
        <span className="logo">
        LOGO
        </span>
        <div className="links">
          <span className="home">
          Home
          </span>
          <span className="register">
          Register
          </span>
        </div>
      </div>
      <div className="hero-section">
        <div className="left-pane">
          <div className="title">
          Your Best Value Proposition
          </div>
          <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="button-primary">
            <span className="start-free-trial">
            Start free trial
            </span>
          </div>
        </div>
        <div className="right-pane">
          <img className="browser" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="footer">
        <div className="pane-left">
          <div className="logo-1">
          LOGO
          </div>
          <div className="copyright">
          © 2010 — 2024
          </div>
          <span className="link">
          Privacy — Terms
          </span>
        </div>
        <div className="pane-right">
          <div className="box-links">
            <div className="header-links">
              <span className="subtitle-1">
              Product
              </span>
            </div>
            <div className="body-links">
              <div className="link-1">
              Product
              </div>
              <div className="link-2">
              Product
              </div>
              <span className="link-3">
              Product
              </span>
            </div>
          </div>
          <div className="box-links-1">
            <div className="header-links-1">
              <span className="subtitle-2">
              Features
              </span>
            </div>
            <div className="body-links-1">
              <div className="link-4">
              Feature
              </div>
              <div className="link-5">
              Feature
              </div>
              <span className="link-6">
              Feature
              </span>
            </div>
          </div>
          <div className="box-links-2">
            <div className="header-links-2">
              <span className="subtitle-3">
              Resourses
              </span>
            </div>
            <div className="body-links-2">
              <div className="link-7">
              Resource
              </div>
              <div className="link-8">
              Resource
              </div>
              <span className="link-9">
              Resource
              </span>
            </div>
          </div>
          <div className="box-links-3">
            <div className="header-links-3">
              <span className="subtitle-4">
              Company
              </span>
            </div>
            <div className="body-links-3">
              <div className="link-10">
              Company
              </div>
              <div className="link-11">
              Company
              </div>
              <span className="link-12">
              Company
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}