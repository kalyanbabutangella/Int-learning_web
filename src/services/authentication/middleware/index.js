import { loginReq, loginSuccess, loginFailure } from "../actions/actionCreators"

// eslint-disable-next-line no-unused-vars
export const login = ({ email, password }) => (dispatch) => {
  dispatch(loginReq())
  setTimeout(() => {
    try {
      const user = {
        email: "someone@learning.com",
        username: "Some one",
        section: "A",
      }
      dispatch(loginSuccess(user))
    } catch (error) {
      dispatch(loginFailure(error))
    }
  }, 2000)
}
