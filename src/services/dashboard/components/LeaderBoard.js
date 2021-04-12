import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"

const LeaderBoard = (props) => {
  const { leader_board } = props.dashboard
  if (leader_board.isLoading) return "Loading"
  // eslint-disable-next-line react/prop-types
  const LeaderBoardCard = ({ id, studentname, score, pic }) => {
    return (
      <div
        className="upcoming"
        style={{
          margin: "10px",
          marginTop: "15px",
          borderRadius: "4px",
          padding: "8px",
        }}
      >
        <div className="d-flex">
          <div style={{ borderRight: "1px solid #bfbdb6" }}>
            <div style={{ margin: "13px" }}>{id + 1}</div>
          </div>
          <div style={{ margin: "0 15px 0 18px " }}>
            <img src={pic} height="40" />
          </div>
          <div>
            <div style={{ fontSize: "large", color: "#a3a19b", fontWeight: 600 }}>
              {studentname}
            </div>
          </div>
          <div style={{ borderLeft: "1px solid #bfbdb6", margin: "auto 15px auto auto" }}>
            <div style={{ margin: "auto 10px auto 15px" }}>{score}</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <Grid className="show-border " item xs={12} sm={4}>
      <div className="c-title"> Leader Board</div>
      {leader_board.data.map((student) => {
        return <LeaderBoardCard key={student.id} {...student} />
      })}
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
