import PropTypes from "prop-types"
import React from "react"

function WarningChip(props) {
  return <span className="custom-chip chip-warning">{props.children}</span>
}

WarningChip.propTypes = {
  children: PropTypes.string,
}

export default WarningChip
