import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"

const LeaderBoard = (props) => {
  const { leader_board } = props.dashboard
  if (leader_board.isLoading) return "Loading"
  return (
    <Grid className="show-border" item xs={12} sm={4}>
      LeaderBoard
    </Grid>
  )
}

LeaderBoard.propTypes = {
  dashboard: PropTypes.shape({
    leader_board: PropTypes.any,
  }),
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, null)(LeaderBoard)
