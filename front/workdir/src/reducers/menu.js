import {
  MAKE_MENU,
} from '../actions'


export function menu(state = [], action) {
  switch (action.type) {
    case MAKE_MENU:
      return action.items
    default:
      return state
  }
}


export default menu
