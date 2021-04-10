import PropTypes from "prop-types"
import React from "react"

function WarningChip(props) {
  return <span className="custom-chip chip-warning">{props.Label}</span>
}

WarningChip.propTypes = {
  Label: PropTypes.string,
}

export default WarningChip
