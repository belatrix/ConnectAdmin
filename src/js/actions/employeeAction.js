import axios from 'axios';
import * as globalConstants from '../constants/config';

export function fetchEmployeesList() {

  return function(dispatch) {
    axios.get(`${globalConstants.SERVER_BASE_URL}/employee/list/`,
  {
    headers: {"Authorization": "token " + localStorage.getItem("token")}
  })
    .then((response) => {
      dispatch({type: 'FETCH_LIST_EMPLOYEES_FULFILLED', payload: response.data});
    }).catch((error) => {
      dispatch({type: 'FETCH_LIST_EMPLOYEES_REJECTED', payload: error.data})
    })
  }

}
