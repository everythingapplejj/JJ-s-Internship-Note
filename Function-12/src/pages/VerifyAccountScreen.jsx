import './VerifyAccountScreen.css'

export default function VerifyAccountScreen() {
  return (
    <div className="verify-account-screen">
      <div className="navbar">
        <span className="flowbite">
        JobEZ
        </span>
      </div>
      <div className="container-2">
        <div className="verify-your-email-address">
        VERIFY YOUR  EMAIL ADDRESS
        </div>
        <div className="line-8">
        </div>
        <div className="please-check-your-inbox-for-verification-code">
        Please check your inbox for verification <br />
        code
        </div>
        <div className="input-number">
          <div className="container-1">
            <div className="input">
            </div>
            <div className="input-1">
            </div>
            <div className="input-2">
            </div>
            <div className="input-3">
            </div>
          </div>
          <div className="input-4">
          </div>
          <div className="input-5">
          </div>
        </div>
        <div className="button">
          <span className="text">
          Verify Code
          </span>
        </div>
        <div className="container">
          <span className="resend-code">
          Resend Code
          </span>
          <span className="change-email">
          Change Email
          </span>
        </div>
      </div>
      <span className="back-to-previous-page">
      Back to previous page
      </span>
    </div>
  )
}