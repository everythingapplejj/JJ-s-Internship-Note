import './VerifyAccountScreenCodeEnteredByUser.css'

export default function VerifyAccountScreenCodeEnteredByUser() {
  return (
    <div className="verify-account-screen-code-entered-by-user">
      <div className="navbar">
        <span className="flowbite">
        JobEZ
        </span>
      </div>
      <div className="container">
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
          <div className="container-2">
            <div className="input">
              <span className="container">
              *
              </span>
            </div>
            <div className="input-1">
              <span className="container-1">
              *
              </span>
            </div>
            <div className="input-2">
              <span className="container-2">
              *
              </span>
            </div>
            <div className="input-3">
              <span className="container-3">
              *
              </span>
            </div>
          </div>
          <div className="input-4">
            <span className="container-4">
            *
            </span>
          </div>
          <div className="input-5">
            <span className="container-5">
            *
            </span>
          </div>
        </div>
        <div className="button">
          <span className="text">
          Verify Code
          </span>
        </div>
        <div className="container-1">
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