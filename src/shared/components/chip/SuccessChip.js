import PropTypes from "prop-types"
import React from "react"

function SuccessChip(props) {
  return <span className="custom-chip chip-success">{props.Label}</span>
}

SuccessChip.propTypes = {
  Label: PropTypes.string,
}

export default SuccessChip
