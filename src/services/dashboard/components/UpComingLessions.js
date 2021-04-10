import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"

const UpComingLessions = (props) => {
  const { up_coming_lessons } = props.dashboard
  if (up_coming_lessons.isLoading) return "Loading"
  return (
    <Grid className="show-border" item xs={12} sm={4}>
      UpComingLessions
    </Grid>
  )
}

UpComingLessions.propTypes = {
  dashboard: PropTypes.shape({
    up_coming_lessons: PropTypes.any,
  }),
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, null)(UpComingLessions)
