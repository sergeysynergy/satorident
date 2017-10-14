import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

import { menu } from './menu'
import { services } from './services'

/* End of import section */

const rootReducer = combineReducers({
  router: routerReducer,
  menu,
  services,
})

/*
function rootReducer(state = {}, action) {
  return {
    menu: menu(state.menu, action),
  }
}
*/


export default rootReducer
