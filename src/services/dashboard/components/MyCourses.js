import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"

const UpComingLessions = (props) => {
  const { my_courses } = props.dashboard
  if (my_courses.isLoading) return "Loading"
  return (
    <Grid className="show-border" item xs={12} sm={8}>
      My Courses
    </Grid>
  )
}

UpComingLessions.propTypes = {
  dashboard: PropTypes.shape({
    my_courses: PropTypes.any,
  }),
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, null)(UpComingLessions)
