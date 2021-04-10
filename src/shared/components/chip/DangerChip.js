import PropTypes from "prop-types"
import React from "react"

function DangerChip(props) {
  return <span className="custom-chip chip-danger">{props.Label}</span>
}

DangerChip.propTypes = {
  Label: PropTypes.string,
}

export default DangerChip
