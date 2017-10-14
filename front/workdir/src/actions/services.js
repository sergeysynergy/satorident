import {
  ADD_SERVICES,
} from '../actions'

/* end of import section */
/* other constants */

/* action creators */

export function doAddServices(services) {
  return { type: ADD_SERVICES, services }
}

/* other functions */
