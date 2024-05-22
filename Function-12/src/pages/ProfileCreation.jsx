import './ProfileCreation.css'

export default function ProfileCreation() {
  return (
    <div className="profile-creation">
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
            Profile Creation
            </span>
          </div>
          <div className="icon-buttons">
            <span className="icon">
            😊
            </span>
            <span className="icon-1">
            🔍
            </span>
          </div>
        </div>
      </div>
      <div className="avatar">
        <div className="container-1">
          <div className="avatar-1">
          </div>
          <div className="frame-427318906">
            <span className="title-1">
            John Doe
            </span>
            <span className="subtitle">
            Job Seeker
            </span>
          </div>
        </div>
        <div className="button">
          <span className="title-2">
          Edit
          </span>
          <div className="icon-2">
            <img className="vector-9" src="assets/vectors/Unknown" />
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <span className="title-3">
          Profile Picture
          </span>
        </div>
      </div>
      <div className="input">
        <div className="title-4">
        Full Name
        </div>
        <div className="textfield">
          <span className="text">
          Enter your full name
          </span>
        </div>
      </div>
      <div className="input-1">
        <div className="title-5">
        Email
        </div>
        <div className="textfield-1">
          <span className="text-1">
          Enter your email
          </span>
        </div>
      </div>
      <div className="input-2">
        <div className="title-6">
        Location
        </div>
        <div className="textfield-2">
          <span className="text-2">
          Enter your location
          </span>
        </div>
      </div>
      <div className="input-3">
        <div className="title-7">
        Skills
        </div>
        <div className="textfield-3">
          <span className="text-3">
          Enter your skills
          </span>
        </div>
      </div>
      <div className="selection">
        <div className="title-8">
        Experience Level
        </div>
        <div className="chip-group">
          <div className="chip">
            <span className="text-4">
            Entry Level
            </span>
          </div>
          <div className="chip-1">
            <span className="text-5">
            Mid Level
            </span>
          </div>
          <div className="chip-2">
            <span className="text-6">
            Senior Level
            </span>
          </div>
        </div>
      </div>
      <div className="button-1">
        <div className="seconday">
          <span className="title-9">
          Cancel
          </span>
        </div>
        <div className="primary">
          <span className="title-10">
          Save Profile
          </span>
        </div>
      </div>
    </div>
  )
}