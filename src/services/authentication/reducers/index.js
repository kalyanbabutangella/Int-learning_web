import ACTION from "../actions/actionTypes"

const initialState = {
  isLoggedIn: true,
  login: {
    isProcessing: false,
    data: {},
    error: "",
  },
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION.LOGIN_REQ:
      return {
        ...state,
        isLoggedIn: false,
        login: {
          isProcessing: true,
          data: {},
          error: "",
        },
      }

    case ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        login: {
          isProcessing: false,
          data: payload,
          error: "",
        },
      }

    case ACTION.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        login: {
          isProcessing: false,
          data: {},
          error: payload,
        },
      }

    default:
      return state
  }
}
