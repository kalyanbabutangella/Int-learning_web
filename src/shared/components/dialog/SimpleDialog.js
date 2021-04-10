import PropTypes from "prop-types"
import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"

export default function SimpleDialog(props) {
  const { dialogTitle, buttonTitle, buttonDialogTitle, Body } = props
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent className="dialog_mobile">
          <Body />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              color: "white",
              backgroundColor: "#015f78",
              outline: "none",
            }}
          >
            {buttonDialogTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

SimpleDialog.propTypes = {
  Body: PropTypes.any,
  buttonDialogTitle: PropTypes.string,
  buttonTitle: PropTypes.string,
  dialogTitle: PropTypes.string,
}
