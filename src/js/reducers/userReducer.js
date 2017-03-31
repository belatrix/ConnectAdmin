import { FETCH_USER_PENDING, FETCH_USER_REJECTED, FETCH_USER_FULFILLED } from '../constants/actionTypes';

export default function reducer(state = {
  user: {
    id: null,
    name: null,
    age: null,
    location: {},
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return { ...state, fetching: true };
    case FETCH_USER_REJECTED:
      return { ...state, fetching: false, error: action.payload };
    case FETCH_USER_FULFILLED:
      return { ...state, fetching: false, fetched: true, user: action.payload.data };
    default:
      return state;
  }
}
