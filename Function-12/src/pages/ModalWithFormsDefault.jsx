import './ModalWithFormsDefault.css'

export default function ModalWithFormsDefault() {
  return (
    <div className="modal-with-forms-default">
      <div className="modal-header">
        <div className="title">
          <span className="company-name-job-title">
          Company Name / Job Title
          </span>
        </div>
        <div className="x">
          <img className="vector" src="assets/vectors/Unknown" />
        </div>
      </div>
      <div className="separator">
      </div>
      <div className="modal-body">
        <div className="project-description">
          <span className="next-friday-should-b">
          U.S. Equal Opportunity Employment Information (Completion is voluntary)
          </span>
        </div>
        <div className="input">
          <div className="label">
          Veteran Status
          </div>
          <div className="input-2">
            <span className="placeholder">
            Regular Select
            </span>
            <div className="chevron-down">
              <img className="vector-1" src="assets/vectors/Unknown" />
            </div>
          </div>
        </div>
        <div className="input-1">
          <div className="label-1">
          Disability Status
          </div>
          <div className="input-3">
            <span className="placeholder-1">
            Regular Select
            </span>
            <div className="chevron-down-1">
              <img className="vector-2" src="assets/vectors/Unknown" />
            </div>
          </div>
        </div>
      </div>
      <div className="separator-1">
      </div>
      <div className="modal-footer">
        <div className="button">
          <span className="text">
          Apply
          </span>
        </div>
      </div>
    </div>
  )
}