import PropTypes from "prop-types"
import React from "react"

function CustomCard(props) {
  const { image, first_title } = props
  const colors = ["#6d6d6d", "#32c282", "#0295aa", "#fc9c86", "#f5365c"]
  var color = colors[Math.floor(Math.random() * colors.length)]
  return (
    <div>
      <div
        style={{ borderBottom: `3px solid ${color}` }}
        className="companycard"
      >
        <div className="companylogo">
          <img className="companyimage" src={image} />
        </div>
        <div className="companypanel">
          <div className="companyname">{first_title}</div>
        </div>
      </div>
    </div>
  )
}

CustomCard.propTypes = {
  first_title: PropTypes.string,
  image: PropTypes.string,
}

export default CustomCard
