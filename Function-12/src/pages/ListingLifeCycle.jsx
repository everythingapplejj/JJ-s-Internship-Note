import './ListingLifeCycle.css'

export default function ListingLifeCycle() {
  return (
    <div className="listing-life-cycle">
      <div className="container-1">
        <div className="container">
          <div className="container-5">
            <div className="container-6">
              <div className="flow">
                <div className="arrow-27">
                </div>
                <span className="employer-clicks-new-listing-button">
                Employer Clicks <br />
                new listing button
                </span>
              </div>
              <div className="draft-phase">
                <img className="ellipse-26" src="assets/vectors/Unknown" />
                <span className="draft">
                Draft
                </span>
              </div>
            </div>
            <div className="completed-phase">
              <img className="ellipse-27" src="assets/vectors/Unknown" />
              <span className="completed">
              Completed
              </span>
            </div>
          </div>
          <div className="flow-9">
            <div className="arrow-321">
            </div>
            <span className="employer-duplicates-listing">
            Employer duplicates <br />
            listing
            </span>
          </div>
        </div>
        <div className="container-3">
          <div className="flow-5">
            <span className="employer-presses-save-publish">
            Employer Presses <br />
            Save&amp;Publish
            </span>
          </div>
          <div className="flow-6">
            <span className="employer-presses-unpublish">
            Employer Presses <br />
            Unpublish
            </span>
          </div>
          <div className="flow-7">
            <div className="arrow-36">
            </div>
            <div className="employer-finalizesacceptance-of-an-applicant">
            Employer Finalizes <br />
            acceptance of an<br />
            applicant
            </div>
          </div>
        </div>
        <div className="container-4">
          <div className="container-2">
            <div className="published-phase">
              <img className="ellipse-272" src="assets/vectors/Unknown" />
              <span className="published">
              Published
              </span>
            </div>
            <div className="closed-phase">
              <img className="ellipse-271" src="assets/vectors/Unknown" />
              <span className="closed-for-applications">
              Closed for<br />
              Applications
              </span>
            </div>
          </div>
          <div className="flow-1">
            <div className="arrow-32">
            </div>
            <span className="employer-is-unsatisfied-wapplicants-and-pressespublish">
            Employer is unsatisfied w/<br />
            applicants and presses<br />
            “publish”
            </span>
          </div>
          <div className="flow-8">
            <div className="arrow-30">
            </div>
            <span className="employer-is-satisfied-wapplication-and-pressesclose-to-applications">
            Employer is satisfied w/<br />
            application # and presses<br />
            “close to applications”
            </span>
          </div>
        </div>
      </div>
      <div className="flow-2">
        <img className="arrow-31" src="assets/vectors/Unknown" />
        <span className="job-seekers-send-applications">
        Job Seekers<br />
        Send Applications
        </span>
      </div>
      <div className="flow-3">
        <img className="arrow-33" src="assets/vectors/Unknown" />
        <span className="employer-sends-offer-to-an-applicant">
        Employer sends<br />
        offer to an applicant
        </span>
      </div>
      <div className="flow-4">
        <img className="arrow-34" src="assets/vectors/Unknown" />
        <span className="applicant-accepts-or-rejects-the-offer">
        Applicant accepts<br />
        or rejects the offer
        </span>
      </div>
      <div className="arrow-28">
      </div>
      <div className="arrow-29">
      </div>
      <div className="job-seekers">
        <span className="job-seekers-1">
        Job Seekers
        </span>
      </div>
      <span className="applicant-does-not-act-on-the-offer-for-aweek">
      Applicant does<br />
      not act on the offer<br />
      for a week(?)
      </span>
      <img className="arrow-37" src="assets/vectors/Unknown" />
    </div>
  )
}