import './PostApplicantActionPageSketchVersion3.css'

export default function PostApplicantActionPageSketchVersion3() {
  return (
    <div className="post-applicant-action-page-sketch-version-3">
      <div className="navbar-desktop">
        <span className="logo">
        LOGO
        </span>
        <div className="links">
          <span className="home">
          Home
          </span>
          <span className="login">
          Login
          </span>
        </div>
      </div>
      <div className="body">
        <div className="whats-next">
          <div className="whats-next-1">
          What’s Next?
          </div>
          <div className="congrats">
          Congrats on finding the right person for your job!
          </div>
          <div className="warning">
          You will be unable to send anymore offers on this listing until the applicant <br />
          responds to this offer or until a week(?) passes.
          </div>
          <span className="in-the-meantime">
          In the meantime you should:<br />
          Prepare an official offer for the applicant and send it to them as soon as<br />
          possible<br />
          Stay in contact with the applicant as much as possible<br />
          Review other applicants or prepare to reopen the listing in case this <br />
          applicant rejects the offer 
          </span>
        </div>
        <div className="contact">
          <div className="frame-19">
            <div className="message-icon">
              <div className="frame">
                <img className="vector" src="assets/vectors/Unknown" />
              </div>
            </div>
            <div className="email-icon">
              <img className="frame-1" src="assets/vectors/Unknown" />
            </div>
            <div className="phone-icon">
              <div className="frame-2">
                <img className="vector-3" src="assets/vectors/Unknown" />
              </div>
            </div>
          </div>
          <div className="pop-up-description">
            <span className="copy-phone-number-to-clipboard">
            Copy Phone Number to Clipboard
            </span>
          </div>
          <div className="container">
            <span className="copy-email-to-clipboard">
            Copy Email to Clipboard
            </span>
          </div>
          <div className="pop-up-description-1">
            <span className="go-to-messages">
            Go to Messages
            </span>
          </div>
          <span className="contact-applicant">
          Contact Applicant:
          </span>
        </div>
        <div className="return-to-listings">
          <span className="label">
          Return to<br />
          Listings Page
          </span>
        </div>
      </div>
    </div>
  )
}