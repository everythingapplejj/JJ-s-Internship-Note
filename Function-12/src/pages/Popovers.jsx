import './Popovers.css'

export default function Popovers() {
  return (
    <div className="popovers">
      <div className="content">
        <div className="popover-body">
          <span className="must-have-at-least-6-characters">
          Must have at least 6 characters
          </span>
        </div>
        <div className="rectangles">
          <div className="rectangle-1">
          </div>
          <div className="rectangle-2">
          </div>
          <div className="rectangle-5">
          </div>
          <div className="rectangle-6">
          </div>
        </div>
        <div className="popover-body-2">
          <span className="its-better-to-have">
          It’s better to have:
          </span>
        </div>
        <div className="popover-body-1">
          <div className="requirement-1">
            <div className="check-outline">
              <img className="vector" src="assets/vectors/Unknown" />
            </div>
            <span className="upper-lower-case-letters">
            Upper &amp; lower case letters
            </span>
          </div>
          <div className="requirement-2">
            <div className="x">
              <img className="vector-1" src="assets/vectors/Unknown" />
            </div>
            <span className="asymbol">
            A symbol (#$&amp;)
            </span>
          </div>
          <div className="requirement-3">
            <div className="x-1">
              <img className="vector-2" src="assets/vectors/Unknown" />
            </div>
            <span className="alonger-password">
            A longer password
            </span>
          </div>
        </div>
      </div>
      <div className="arrow">
        <img className="container" src="assets/vectors/Unknown" />
      </div>
    </div>
  )
}