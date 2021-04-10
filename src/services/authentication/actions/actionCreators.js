import ACTION from "./actionTypes"

export const loginReq = () => ({
  type: ACTION.LOGIN_REQ,
})

export const loginSuccess = (payload) => ({
  type: ACTION.LOGIN_SUCCESS,
  payload
})

export const loginFailure = (payload) => ({
  type: ACTION.LOGIN_FAILURE,
  payload
})

