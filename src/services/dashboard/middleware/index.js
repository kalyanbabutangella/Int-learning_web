import {
  loadGraphDataReq,
  loadGraphDataSuccess,
  loadMyCoursesReq,
  loadMyCoursesSuccess,
  loadUpcomingLessonsReq,
  loadUpcomingLessonsSuccess,
  loadHomeworkReq,
  loadHomeworkSuccess,
  loadTasksReq,
  loadTasksSuccess,
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

export const loadHomework = () => (dispatch) => {
  dispatch(loadHomeworkReq())
  setTimeout(() => {
    const payload = [
      {
        title: "Basics of algebra",
        deadline: "05.09.2019",
        progress: 80,
      },
      {
        title: "Chemical bonding",
        deadline: "04.09.2019",
        progress: 90,
      },
      {
        title: "Problems on statistics",
        deadline: "14.09.2019",
        progress: 100,
      },
      {
        title: "Molecular Orbital Theory",
        deadline: "15.09.2019",
        progress: 80,
      },
      // {
      //   title: "Thermodynamics",
      //   deadline: "16.09.2019",
      //   progress: 90,
      // },
      // {
      //   title: "Binomial Theorem",
      //   deadline: "17.09.2019",
      //   progress: 72,
      // },
    ]
    dispatch(loadHomeworkSuccess(payload))
  }, 1000)
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

export const loadTasks = () => (dispatch) => {
  dispatch(loadTasksReq())
  setTimeout(() => {
    const payload = [
      {
        title: "Practice calculus problems",
        tags: ["Calculus", "Mathematics"],
        createdAt: "12 Apr",
        id: 0,
      },
      {
        title: "Bonding structure",
        tags: ["Bond", "Chemistry"],
        createdAt: "13 Apr",
        id: 1,
      },
      {
        title: "Force equations",
        tags: ["Force", "Physics"],
        createdAt: "14 Apr",
        id: 2,
      },
    ]
    dispatch(loadTasksSuccess(payload))
  }, 1200)
}
