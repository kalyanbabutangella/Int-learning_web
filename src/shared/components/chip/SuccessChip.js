import PropTypes from "prop-types"
import React from "react"

function SuccessChip(props) {
  return <span className="custom-chip chip-success">{props.children}</span>
}

SuccessChip.propTypes = {
  children: PropTypes.string,
}

export default SuccessChip
