import * as types from '../constants/actionTypes'

export function fetchUser() {
  return {
      type: types.FETCH_USER_FULFILLED,
      payload: {
        name: "Estefano"
      }
  }
}
