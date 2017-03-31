import { FETCH_AUTH_PENDING, FETCH_AUTH_REJECTED, FETCH_AUTH_FULFILLED } from '../constants/actionTypes';

export default function reducer(state = {
  token: null,
  fetching: false,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_AUTH_PENDING:
      return { ...state, fetching: true };
    case FETCH_AUTH_REJECTED:
      return { ...state, fetching: false, error: action.payload };
    case FETCH_AUTH_FULFILLED:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
}
