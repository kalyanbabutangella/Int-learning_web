import ACTION from "../actions/actionTypes"

const initialState = {
  my_courses: {
    isLoading: false,
    data: [],
    error: "",
  },
  up_coming_lessons: {
    isLoading: false,
    data: [],
    error: "",
  },
  tasks: {
    isLoading: false,
    data: [],
    error: "",
  },
  graph_data: {
    isLoading: false,
    data: {},
    error: "",
  },
  leader_board: {
    isLoading: false,
    data: [],
    error: "",
  },
  home_work: {
    isLoading: false,
    data: [],
    error: "",
  },
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION.LOAD_MYCOURSES_REQ:
      return {
        ...state,
        my_courses: {
          ...state.my_courses,
          isLoading: true,
          error: "",
        },
      }

    case ACTION.LOAD_MYCOURSES_SUCCESS:
      return {
        ...state,
        my_courses: {
          ...state.my_courses,
          isLoading: false,
          data: payload,
        },
      }

    case ACTION.LOAD_MYCOURSES_FAILURE:
      return {
        ...state,
        my_courses: {
          ...state.my_courses,
          isLoading: false,
          error: payload,
        },
      }

    case ACTION.LOAD_UPCOMING_LESSIONS_REQ:
      return {
        ...state,
        up_coming_lessons: {
          ...state.up_coming_lessons,
          isLoading: true,
          error: "",
        },
      }

    case ACTION.LOAD_UPCOMING_LESSIONS_SUCCESS:
      return {
        ...state,
        up_coming_lessons: {
          ...state.up_coming_lessons,
          isLoading: false,
          data: payload,
        },
      }

    case ACTION.LOAD_UPCOMING_LESSIONS_FAILURE:
      return {
        ...state,
        up_coming_lessons: {
          ...state.up_coming_lessons,
          isLoading: false,
          error: payload,
        },
      }

    case ACTION.LOAD_TASKS_REQ:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          isLoading: true,
          error: "",
        },
      }

    case ACTION.LOAD_TASKS_SUCCESS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          isLoading: false,
          data: payload,
        },
      }

    case ACTION.LOAD_TASKS_FAILURE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          isLoading: false,
          error: payload,
        },
      }

    case ACTION.LOAD_GRAPH_DATA_REQ:
      return {
        ...state,
        graph_data: {
          ...state.graph_data,
          isLoading: true,
          error: "",
        },
      }

    case ACTION.LOAD_GRAPH_DATA_SUCCESS:
      return {
        ...state,
        graph_data: {
          ...state.graph_data,
          isLoading: false,
          data: payload,
        },
      }

    case ACTION.LOAD_GRAPH_DATA_FAILURE:
      return {
        ...state,
        graph_data: {
          ...state.graph_data,
          isLoading: false,
          error: payload,
        },
      }

    case ACTION.LOAD_LEADERBOARD_REQ:
      return {
        ...state,
        leader_board: {
          ...state.leader_board,
          isLoading: true,
          error: "",
        },
      }

    case ACTION.LOAD_LEADERBOARD_SUCCESS:
      return {
        ...state,
        leader_board: {
          ...state.leader_board,
          isLoading: false,
          data: payload,
        },
      }

    case ACTION.LOAD_LEADERBOARD_FAILURE:
      return {
        ...state,
        leader_board: {
          ...state.leader_board,
          isLoading: false,
          error: payload,
        },
      }

    case ACTION.LOAD_HOMEWORK_REQ:
      return {
        ...state,
        home_work: {
          ...state.home_work,
          isLoading: true,
          error: "",
        },
      }

    case ACTION.LOAD_HOMEWORK_SUCCESS:
      return {
        ...state,
        home_work: {
          ...state.home_work,
          isLoading: false,
          data: payload,
        },
      }

    case ACTION.LOAD_HOMEWORK_FAILURE:
      return {
        ...state,
        home_work: {
          ...state.home_work,
          isLoading: false,
          error: payload,
        },
      }

    default:
      return state
  }
}
