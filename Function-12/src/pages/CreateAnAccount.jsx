import './CreateAnAccount.css'

export default function CreateAnAccount() {
  return (
    <div className="create-an-account">
      <div className="top-bar">
        <div className="top">
          <img className="wifi" src="assets/vectors/Unknown" />
          <img className="cellular" src="assets/vectors/Unknown" />
          <img className="battery" src="assets/vectors/Unknown" />
          <img className="time" src="assets/vectors/Unknown" />
        </div>
        <div className="content">
          <div className="container">
            <div className="ic-left">
              <img className="shape" src="assets/vectors/Unknown" />
            </div>
            <span className="title">
            Create Account
            </span>
          </div>
          <div className="icon-buttons">
            <span className="icon">
            🔙
            </span>
          </div>
        </div>
      </div>
      <div className="input">
        <div className="title-1">
        Username
        </div>
        <div className="textfield">
          <span className="text">
          Enter your username
          </span>
        </div>
      </div>
      <div className="input-1">
        <div className="title-2">
        Email
        </div>
        <div className="textfield-1">
          <span className="text-1">
          Enter your email
          </span>
        </div>
      </div>
      <div className="input-2">
        <div className="title-3">
        Password
        </div>
        <div className="textfield-2">
          <span className="text-2">
          Enter your password
          </span>
        </div>
      </div>
      <div className="button">
        <div className="primary">
          <span className="title-4">
          Create Account
          </span>
        </div>
      </div>
      <div className="section-title">
        <div className="text-3">
          <span className="title-5">
          Terms and Conditions
          </span>
        </div>
        <div className="button-1">
          <span className="title-6">
          View Terms
          </span>
          <div className="icon-1">
            <img className="vector-9" src="assets/vectors/Unknown" />
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <div className="title-7">
          By creating an account, you agree to our Terms and Privacy Policy
          </div>
          <div className="pagination">
            <div className="rectangle-3343">
            </div>
            <div className="rectangle-3344">
            </div>
            <div className="rectangle-3347">
            </div>
            <div className="rectangle-3340">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}