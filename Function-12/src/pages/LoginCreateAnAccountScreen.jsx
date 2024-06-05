import './LoginCreateAnAccountScreen.css'

export default function LoginCreateAnAccountScreen() {
  return (
    <div className="login-create-an-account-screen">
      <div className="navbar">
        <div className="navbar-1">
          <span className="flowbite">
          JobEZ
          </span>
        </div>
        <div className="component">
          <img className="vector-6" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="user-clicks-login-and-apop-up-screen-appears">
        <div className="log-in-or-create-an-account">
        Log In or Create an account 
        </div>
        <div className="input">
          <span className="email-address">
          Email Address
          </span>
          <div className="x">
            <img className="vector-7" src="assets/vectors/Unknown" />
          </div>
        </div>
        <div className="button">
          <span className="text">
          Continue with email
          </span>
        </div>
        <div className="container-1">
          <div className="line-6">
          </div>
          <span className="or-log-in-with">
          or  Log In with
          </span>
          <div className="line-7">
          </div>
        </div>
        <div className="container-2">
          <div className="google-original">
            <img className="container-4" src="assets/vectors/Unknown" />
            <img className="container-3" src="assets/vectors/Unknown" />
          </div>
          <div className="facebook-original">
            <img className="container" src="assets/vectors/Unknown" />
          </div>
        </div>
        <div className="container-5">
          <div className="indicators">
            <div className="check">
              <img className="vector-8" src="assets/vectors/Unknown" />
            </div>
          </div>
          <span className="by-checking-this-box-iacknowledge-ihave-read-understand-and-agree-to-job-ez-terms-of-use-and-privacy-policy">
          By checking this box, I acknowledge I have read,<br />
          understand, and agree to JobEZ terms of use<br />
          and Privacy policy. 
          </span>
        </div>
      </div>
    </div>
  )
}