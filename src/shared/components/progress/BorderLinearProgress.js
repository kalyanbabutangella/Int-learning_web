import PropTypes from "prop-types"
import React from "react"
import LinearProgress from "@material-ui/core/LinearProgress"
import { withStyles } from "@material-ui/core/styles"

const CustomLinearProgress = withStyles((theme) => ({
  root: {
    height: 7,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress)

const BorderLinearProgress = (props) => {
  const { value } = props
  return (
    <div>
      <CustomLinearProgress variant="determinate" value={value} />
    </div>
  )
}

BorderLinearProgress.propTypes = {
  value: PropTypes.number,
}

export default BorderLinearProgress
