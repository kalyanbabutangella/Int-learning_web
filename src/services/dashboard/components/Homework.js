import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import BorderLinearProgress from "../../../shared/components/progress/BorderLinearProgress"

const Homework = (props) => {
  const { home_work } = props.dashboard
  if (home_work.isLoading) return "Loading"

  // eslint-disable-next-line react/prop-types
  const HomeworkCard = ({ title, progress, deadline }) => {
    return (
      <div style={{ margin: "10px", marginTop: "15px" }}>
        <div className="d-flex justify-content-between">
          <div style={{ fontWeight: 400, fontSize: "16px" }}>{title}</div>
          <div>Deadline</div>
        </div>
        <div className="d-flex justify-content-between">
          <div style={{ fontWeight: 600, fontSize: "16px" }}>{progress}%</div>
          <div>{deadline}</div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <BorderLinearProgress value={progress} />
        </div>
      </div>
    )
  }
  return (
    <Grid className="show-border" item xs={12} sm={4}>
      <div className="c-title">Home work</div>
      {home_work.data.map((item) => {
        return <HomeworkCard key={item.id} {...item} />
      })}
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
