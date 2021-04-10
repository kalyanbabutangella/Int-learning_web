import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"

const Homework = (props) => {
  const { home_work } = props.dashboard
  if (home_work.isLoading) return "Loading"
  return (
    <Grid className="show-border" item xs={12} sm={4}>
      Homework
    </Grid>
  )
}

Homework.propTypes = {
  dashboard: PropTypes.shape({
    home_work: PropTypes.any,
  }),
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, null)(Homework)
