import { Grid } from "@material-ui/core"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import {
  loadGraphData,
  loadMyCourses,
  loadUpcomingLessions,
} from "../middleware"
import Graph from "./Graph"
import Homework from "./Homework"
import LeaderBoard from "./LeaderBoard"
import MyCourses from "./MyCourses"
import Tasks from "./Tasks"
import UpComingLessions from "./UpComingLessions"

const Dashboard = (props) => {
  const { load_upcoming_lessions, load_my_courses, load_graph_data } = props

  useEffect(() => {
    load_upcoming_lessions()
    load_my_courses()
    load_graph_data()
  }, [])
  return (
    <div>
      <Grid className="bg-grey" container>
        <Grid item xs={12}>
          <Grid container>
            <UpComingLessions />
            <Tasks />
            <LeaderBoard />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <Grid container>
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
  load_graph_data: PropTypes.func,
  load_my_courses: PropTypes.func,
  load_upcoming_lessions: PropTypes.func,
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

const mapDispatchToProps = {
  load_upcoming_lessions: loadUpcomingLessions,
  load_my_courses: loadMyCourses,
  load_graph_data: loadGraphData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
