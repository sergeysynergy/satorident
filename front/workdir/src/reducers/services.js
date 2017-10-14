import {
  ADD_SERVICES,
} from '../actions'


export function services(state = [], action) {
  switch (action.type) {
    case ADD_SERVICES:
      return action.services
    default:
      return state
  }
}


export default services
