import { Grid } from "@material-ui/core"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { loadUpcomingLessions } from "../middleware"
import Graph from "./Graph"
import Homework from "./Homework"
import LeaderBoard from "./LeaderBoard"
import MyCourses from "./MyCourses"
import Tasks from "./Tasks"
import UpComingLessions from "./UpComingLessions"

const Dashboard = (props) => {
  const { load_upcoming_lessions } = props

  useEffect(() => {
    load_upcoming_lessions()
  }, [])
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <UpComingLessions />
            <Tasks />
            <LeaderBoard />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                <MyCourses />
                <Graph />
              </Grid>
            </Grid>
            <Homework />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  load_upcoming_lessions: PropTypes.func,
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

const mapDispatchToProps = {
  load_upcoming_lessions: loadUpcomingLessions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
