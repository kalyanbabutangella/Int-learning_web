import { combineReducers } from "redux"
import authReducer from "../../services/authentication/reducers/index"
import dashboardReducer from "../../services/dashboard/reducers/index"

const appReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
})

const rootReducer = (state, action) => {
  // if (action.type === ACTION.SIGNOUT_SUCCESS) {
  //   state = undefined
  // }

  return appReducer(state, action)
}

export default rootReducer
