import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import { Line } from "react-chartjs-2"

const Graph = (props) => {
  const { graph_data } = props.dashboard
  if (graph_data.isLoading) return "Loading"
  return (
    <Grid className="show-border" item xs={12}>
      <Line data={graph_data.data} />
    </Grid>
  )
}

Graph.propTypes = {
  dashboard: PropTypes.shape({
    graph_data: PropTypes.any,
  }),
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, null)(Graph)
