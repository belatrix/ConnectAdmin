export default function reducer(state={
  list:{},
  fetching: false,
  fetched: false,
  error: null
}, action) {

  switch (action.type) {
    case "FETCH_LIST_EMPLOYEES_PENDING":
      return {...state, fetching: true}
      break;

    case "FETCH_LIST_EMPLOYEES_REJECTED":
      return {...state, fetching: false, error: action.payload}
      break;

    case "FETCH_LIST_EMPLOYEES_FULFILLED":
      return {...state, fetching: false, fetched: true, list: action.payload.results}
      break;
  }

  return state
}
