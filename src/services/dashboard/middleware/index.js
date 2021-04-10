import {
  loadUpcomingLessonsReq,
  loadUpcomingLessonsSuccess,
} from "../actions/actionCreators"

export const loadUpcomingLessions = () => (dispatch) => {
  dispatch(loadUpcomingLessonsReq())
  setTimeout(() => {
    const payload = [
      {
        title: "Algebra - II",
        subject: "maths",
        time: 1618083838880,
      },
    ]
    dispatch(loadUpcomingLessonsSuccess(payload))
  }, 1000)
}
