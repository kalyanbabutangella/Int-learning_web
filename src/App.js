import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Login from "./services/authentication/components/Login"

import Main from "./main/index"

export const App = ({ auth }) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {auth.isLoggedIn ? (
            <>
              {/* if user logged in */}
              <Main />
            </>
          ) : (
            <>
              {/* if user is not logged in */}
              <Route exact path="/login" component={Login} />
              <Redirect from="/" to="/login" />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

App.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
  }),
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
