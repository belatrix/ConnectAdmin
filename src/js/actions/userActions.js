import { FETCH_USER_FULFILLED } from '../constants/actionTypes';

export default function fetchUser() {
  return {
    type: FETCH_USER_FULFILLED,
    payload: {
      name: 'Estefano',
    },
  };
}
