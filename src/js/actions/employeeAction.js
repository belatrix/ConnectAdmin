import axios from 'axios';

export default function fetchEmployeesList() {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_LIST_EMPLOYEES',
      payload: axios.get('https://bxconnectdev.herokuapp.com:443/api/employee/list/', {headers: { Authorization: `token ${localStorage.getItem('token')}` }})
    });
  };
}
