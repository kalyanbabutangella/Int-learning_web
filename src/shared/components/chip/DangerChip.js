import PropTypes from "prop-types"
import React from "react"

function DangerChip(props) {
  return <span className="custom-chip chip-danger">{props.children}</span>
}

DangerChip.propTypes = {
  children: PropTypes.string,
}

export default DangerChip
