import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import CustomCard from "../../../shared/components/card/CustomCard"

const UpComingLessions = (props) => {
  const { my_courses } = props.dashboard

  if (my_courses.isLoading) return "Loading"
  return (
    <Grid
      className="show-border"
      item
      xs={12}
      style={{ marginBottom: "15px", marginRight: "10px" }}
    >
      <div className="c-title"> My Courses</div>
      <Grid container spacing={2}>
        {my_courses.data.map((item) => {
          return (
            <Grid key={item.id} item xs={3} style={{ marginBottom: "15px" ,padding:"0 15px 0 15px"}}>
              <CustomCard first_title={item.subject_name} image={item.image} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

UpComingLessions.propTypes = {
  dashboard: PropTypes.shape({
    my_courses: PropTypes.any,
  }),
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
})

export default connect(mapStateToProps, null)(UpComingLessions)
