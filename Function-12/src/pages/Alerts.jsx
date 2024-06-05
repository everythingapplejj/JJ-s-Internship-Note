import './Alerts.css'

export default function Alerts() {
  return (
    <div className="alerts">
      <div className="description">
        <div className="title">
          <div className="container">
            <div className="check-circle">
              <img className="vector" src="assets/vectors/Unknown" />
            </div>
            <span className="title-1">
            Alert heading
            </span>
          </div>
          <div className="x">
            <img className="vector-1" src="assets/vectors/Unknown" />
          </div>
        </div>
        <span className="aww-yeah-you-successfully-read-this-important-alert-message-this-example-text-is-going-to-run-abit-longer-so-that-you-can-see-how-spacing-within-an-alert-works-with-this-kind-of-content">
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </span>
      </div>
      <div className="button">
        <div className="eye">
          <img className="vector-2" src="assets/vectors/Unknown" />
        </div>
        <span className="text">
        View more
        </span>
      </div>
    </div>
  )
}