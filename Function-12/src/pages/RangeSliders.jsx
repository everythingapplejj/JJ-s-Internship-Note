import './RangeSliders.css'

export default function RangeSliders() {
  return (
    <div className="range-sliders">
      <div className="value">
        <div className="thumb">
          <div className="ellipse">
          </div>
        </div>
      </div>
      <div className="data">
        <span className="container">
        0
        </span>
        <span className="container-1">
        50
        </span>
        <span className="container-2">
        100
        </span>
        <span className="container-3">
        150
        </span>
      </div>
    </div>
  )
}