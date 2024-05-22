import './PdfViewer.css'

export default function PdfViewer() {
  return (
    <div className="pdf-viewer">
      <div className="browser-bar">
        <div className="container-1">
          <div className="action-bttn">
            <div className="close-btn">
            </div>
            <div className="restore-btn">
            </div>
            <div className="minimize-btn">
            </div>
          </div>
          <div className="prev-btn">
            <img className="arrow" src="assets/vectors/Unknown" />
          </div>
          <div className="prev-btn-1">
            <img className="arrow-1" src="assets/vectors/Unknown" />
          </div>
          <img className="option-btn" src="assets/vectors/Unknown" />
        </div>
        <div className="address-bar">
          <div className="safaribrowser">
          safaribrowser
          </div>
          <img className="refresh" src="assets/vectors/Unknown" />
        </div>
        <div className="container">
          <div className="share-btn">
            <img className="share" src="assets/vectors/Unknown" />
          </div>
          <div className="view-search-btn">
            <img className="view" src="assets/vectors/Unknown" />
          </div>
          <img className="add-btn" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="desktop-1">
      </div>
    </div>
  )
}