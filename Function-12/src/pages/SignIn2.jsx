import './SignIn2.css'

export default function SignIn2() {
  return (
    <div className="sign-in">
      <div className="modal">
        <div className="modal-body">
          <div className="create-your-free-acc">
          Sign in to JobEZ
          </div>
          <div className="input-field">
            <div className="label">
            Your email
            </div>
            <div className="input">
              <img className="mail" src="assets/vectors/Unknown" />
              <span className="input-text">
              name@flowbite.com
              </span>
            </div>
          </div>
          <div className="input-field-1">
            <div className="label-1">
            Password
            </div>
            <div className="input-1">
              <span className="input-text-1">
              ••••••••••
              </span>
            </div>
          </div>
          <div className="remember-me-lost">
            <div className="checkbox">
              <div className="checkbox-1">
              </div>
              <div className="label-helper-text">
                <span className="write-label-text-here">
                Rememeber me
                </span>
              </div>
            </div>
            <span className="lost-password">
            Forgot password?
            </span>
          </div>
          <div className="button-helper-text">
            <div className="button">
              <span className="text">
              Sign in
              </span>
            </div>
            <p className="not-registered-create-account">
            <span className="not-registered-create-account-sub-6"></span><span></span>
            </p>
          </div>
        </div>
        <div className="modal-header">
          <img className="vector" src="assets/vectors/Unknown" />
        </div>
      </div>
    </div>
  )
}