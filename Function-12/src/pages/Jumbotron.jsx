import './Jumbotron.css'

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="title-desc">
        <div className="heading">
        We invest in the world’s potential
        </div>
        <div className="supporting-text">
        Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </div>
        <div className="button">
          <span className="text">
          Get started
          </span>
          <div className="arrow-right">
            <img className="vector" src="assets/vectors/Unknown" />
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img className="logo-1" src="assets/vectors/Unknown" />
          <span className="flowbite">
          Flowbite
          </span>
        </div>
        <div className="nav-links">
          <div className="link">
            <span className="text-1">
            Company
            </span>
          </div>
          <div className="link-1">
            <span className="text-2">
            Marketplace
            </span>
          </div>
          <div className="link-2">
            <span className="text-3">
            Features
            </span>
          </div>
          <div className="link-3">
            <span className="text-4">
            Team
            </span>
          </div>
          <div className="link-4">
            <span className="text-5">
            Contact
            </span>
          </div>
        </div>
        <div className="cta">
          <div className="text-6">
          Log In
          </div>
          <div className="button-1">
            <span className="text-7">
            Get started
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}