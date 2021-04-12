import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import DangerChip from "../../../shared/components/chip/DangerChip"
import SuccessChip from "../../../shared/components/chip/SuccessChip"
import WarningChip from "../../../shared/components/chip/WarningChip"

const Tasks = (props) => {
  const { tasks } = props.dashboard
  if (tasks.isLoading) return "Loading"

  // eslint-disable-next-line react/prop-types
  const TaskCard = ({ title, tags = [], createdAt }) => {
    return (
      <div
        style={{
          margin: "10px",
          marginTop: "15px",
          border: "1px solid #9fa0a3",
          borderRadius: "4px",
          padding: "8px",
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ fontWeight: 400, fontSize: "16px" }}>{title}</div>
          <div>{createdAt}</div>
        </div>
        <div style={{ marginTop: "10px" }}>
          {tags.map((tag) => {
            const chips = [
              DangerChip,
              SuccessChip,
              WarningChip,
              DangerChip,
              SuccessChip,
              WarningChip,
            ]
            var Chip = chips[Math.floor(Math.random() * chips.length)]
            return <Chip key={tag}>{tag}</Chip>
          })}
        </div>
      </div>
    )
  }
  return (
    <Grid className="show-border" item xs={12} sm={4}>
      <div className="c-title">Tasks</div>
      {tasks.data.map((task) => {
        return <TaskCard key={task.id} {...task} />
      })}
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
