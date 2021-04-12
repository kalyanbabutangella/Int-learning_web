import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import SuccessChip from "../../../shared/components/chip/SuccessChip"


const UpComingLessions = (props) => {
  const { up_coming_lessons } = props.dashboard
  if (up_coming_lessons.isLoading) return "Loading"

  // eslint-disable-next-line react/prop-types
  const UpcomingLessonsCard = ({ subject, topic, date, time, pic }) => {
    return (
      <div
        className="upcoming"
        style={{
          margin: "10px",
          marginTop: "15px",
          // border: "1px solid #9fa0a3",
          borderRadius: "4px",
          padding: "8px",
        }}
      >
        <div className="d-flex justify-content-between ">
          <div>
            <div>{date}</div>
            <div style={{ fontSize: "small", fontWeight: 800 }}>{time}</div>
          </div>
          <div>
            <div>
              <SuccessChip>{subject}</SuccessChip>
            </div>
            <div>{topic}</div>
          </div>
          <div>
            <img src={pic} height="40" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Grid
      className="show-border"
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      style={{ marginRight: "10px", marginTop: "10px" }}
    >
      <div className="c-title">Upcoming Lessons</div>
      {up_coming_lessons.data.map((lesson) => {
        return <UpcomingLessonsCard key={lesson.id} {...lesson} />
      })}
    </Grid>
  )
}

UpComingLessions.propTypes = {
  dashboard: PropTypes.shape({
    up_coming_lessons: PropTypes.shape({
      data: PropTypes.shape({
        map: PropTypes.func,
      }),
      isLoading: PropTypes.any,
    }),
  }),
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, null)(UpComingLessions)
