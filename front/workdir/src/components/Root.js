import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import App from './App'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter" component={App} />
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}

    /*
    <ConnectedRouter  history={history}>
      <Route path="/(:filter)" component={App} />
    </ConnectedRouter>
    */

export default Root
