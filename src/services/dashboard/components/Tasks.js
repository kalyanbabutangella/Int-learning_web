import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"

const Tasks = (props) => {
  const { tasks } = props.dashboard
  if (tasks.isLoading) return "Loading"
  return (
    <Grid className="show-border" item xs={12} sm={4}>
      Tasks
    </Grid>
  )
}

Tasks.propTypes = {
  dashboard: PropTypes.shape({
    tasks: PropTypes.any,
  }),
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, null)(Tasks)
