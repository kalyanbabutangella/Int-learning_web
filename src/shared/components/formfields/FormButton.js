import PropTypes from "prop-types";
import React from 'react'
import { Button } from "@material-ui/core"

function FormButton({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  disabled,
  fullWidth,
  size = "small",
  ...otherProperties
}) {
  return (
    <Button
      onClick={onClick}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      {...otherProperties}
    >
      {children}
    </Button>
  )
}

FormButton.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.string
}

export default FormButton
