import './PostApplicantActionPageSketchVersion2.css'

export default function PostApplicantActionPageSketchVersion2() {
  return (
    <div className="post-applicant-action-page-sketch-version-2">
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
          <div className="contact-applicant">
          Contact Applicant:
          </div>
          <div className="go-to-messages">
            <span className="label-2">
            Go to Messages
            </span>
          </div>
          <div className="email">
            <span className="label-1">
            Copy Email
            </span>
          </div>
          <div className="phone">
            <span className="label">
            Copy Phone Number
            </span>
          </div>
        </div>
        <div className="return-to-listings">
          <span className="label-3">
          Return to<br />
          Listings Page
          </span>
        </div>
      </div>
    </div>
  )
}