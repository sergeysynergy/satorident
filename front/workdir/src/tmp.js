import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Menu from '../containers/MapMenu'
import Header from './Header/Header'
import HeaderLinks from './Header/HeaderLinks'
import Home from './Home/Home';
// import Bottom from './Bottom';
import Price from './Price';
import Service from './Service';
import './App.css';
// import maket from './maket.png';

// menu (≥1280px)
// lg (≥1200px)
// md (≥992px)
// sm (768px ≤ width < 992px)
// xs (<768px)
class App extends Component {
  render() {
    return (
      <div className='App'>
        <table>
          <tbody>
            <tr>
              <td className='MenuTd'>
                <Menu />
              </td>
              <td>
                <Header />
                {/*
                <HeaderLinks />
                */}
                <HeaderLinks />
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/ceni" component={Price}/>
                  <Route path="/:slug" component={Service}/>
                </Switch>
                {/*}<Bottom />*/}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}







import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

// import * as cement from './includes/cement.js'
// import * as actions from './actions'
// import * as services from './actions/services'
import * as menu from './actions/menu'
import rootReducer from './reducers'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
// import App from './components/App'

import Root from './components/Root'

/* end of import section */

const history = createHistory()

const loggerMiddleware = createLogger()
export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    // loggerMiddleware, // neat middleware that logs actions
    routerMiddleware(history),
  )
)


store.dispatch(menu.fetchMenu(menu.menuItems))


render(
  <Provider store={store}>
    <ConnectedRouter  history={history}>
      <Route path="/(:filter)" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
      // <App />
