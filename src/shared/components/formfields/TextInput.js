import PropTypes from "prop-types";
import React from 'react'
import { TextField } from "@material-ui/core"

function TextInput({
  label,
  name,
  onChange,
  required,
  value = "",
  variant = "outlined",
  ...otherProperties
}) {
  return (
    <TextField
      label={label}
      name={name}
      onChange={onChange}
      required={required}
      value={value}
      variant={variant}
      size="small"
      fullWidth
      {...otherProperties}
    />
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string,
  variant: PropTypes.string
}

export default TextInput
