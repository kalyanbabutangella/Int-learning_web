import ACTION from "./actionTypes"

export const loadMyCoursesReq = () => ({
  type: ACTION.LOAD_MYCOURSES_REQ,
})

export const loadMyCoursesSuccess = (payload) => ({
  type: ACTION.LOAD_MYCOURSES_SUCCESS,
  payload,
})

export const loadMyCoursesFailure = (payload) => ({
  type: ACTION.LOAD_MYCOURSES_FAILURE,
  payload,
})

export const loadUpcomingLessonsReq = () => ({
  type: ACTION.LOAD_UPCOMING_LESSIONS_REQ,
})

export const loadUpcomingLessonsSuccess = (payload) => ({
  type: ACTION.LOAD_UPCOMING_LESSIONS_SUCCESS,
  payload,
})

export const loadUpcomingLessonsFailure = (payload) => ({
  type: ACTION.LOAD_UPCOMING_LESSIONS_FAILURE,
  payload,
})

export const loadTasksReq = () => ({
  type: ACTION.LOAD_TASKS_REQ,
})

export const loadTasksSuccess = (payload) => ({
  type: ACTION.LOAD_TASKS_SUCCESS,
  payload,
})

export const loadTasksFailure = (payload) => ({
  type: ACTION.LOAD_TASKS_FAILURE,
  payload,
})

export const loadGraphDataReq = () => ({
  type: ACTION.LOAD_GRAPH_DATA_REQ,
})

export const loadGraphDataSuccess = (payload) => ({
  type: ACTION.LOAD_GRAPH_DATA_SUCCESS,
  payload,
})

export const loadGraphDataFailure = (payload) => ({
  type: ACTION.LOAD_GRAPH_DATA_FAILURE,
  payload,
})

export const loadLeaderBoardReq = () => ({
  type: ACTION.LOAD_LEADERBOARD_REQ,
})

export const loadLeaderBoardSuccess = (payload) => ({
  type: ACTION.LOAD_LEADERBOARD_SUCCESS,
  payload,
})

export const loadLeaderBoardFailure = (payload) => ({
  type: ACTION.LOAD_LEADERBOARD_FAILURE,
  payload,
})
