import {
  loadGraphDataReq,
  loadGraphDataSuccess,
  loadMyCoursesReq,
  loadMyCoursesSuccess,
  loadUpcomingLessonsReq,
  loadUpcomingLessonsSuccess,
} from "../actions/actionCreators"

export const loadUpcomingLessions = () => (dispatch) => {
  dispatch(loadUpcomingLessonsReq())
  setTimeout(() => {
    const payload = [
      {
        title: "Algebra - II",
        subject_name: "Maths",
        time: 1618083838880,
      },
    ]
    dispatch(loadUpcomingLessonsSuccess(payload))
  }, 1000)
}

export const loadMyCourses = () => (dispatch) => {
  dispatch(loadMyCoursesReq())
  setTimeout(() => {
    const payload = [
      {
        image:
          "https://cdn4.iconfinder.com/data/icons/business-1221/24/Calculator-512.png",
        subject_name: "Maths",
        no_of_lessons: 30,
        id: 0,
      },
      {
        image:
          "https://www.pngkey.com/png/full/1-10081_violet-atom-logo-3-physics-clipart.png",
        subject_name: "Physics",
        no_of_lessons: 32,
        id: 1,
      },
      {
        image:
          "https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-05-512.png",
        subject_name: "Chemistry",
        no_of_lessons: 28,
        id: 2,
      },
    ]
    dispatch(loadMyCoursesSuccess(payload))
  }, 1300)
}

export const loadGraphData = () => (dispatch) => {
  dispatch(loadGraphDataReq())
  setTimeout(() => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Your performance",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    }

    dispatch(loadGraphDataSuccess(data))
  }, 700)
}
