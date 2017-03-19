import axios from 'axios';

export function fetchCurrentScore() {
  return function (dispatch) {
    axios.get('https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/current_month_score/?quantity=10',
      {
        headers: { Authorization: `token ${localStorage.getItem('token')}` },
      })
    .then(response => dispatch({ type: 'FETCH_CURRENT_FULFILLED', payload: response.data }))
    .catch(error => dispatch({ type: 'FETCH_CURRENT_REJECTED', payload: error.data }));
  };
}

export function fetchLastMonthScore() {
  return function (dispatch) {
    axios.get('https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/last_month_score/?quantity=10',
      {
        headers: { Authorization: `token ${localStorage.getItem('token')}` },
      })
    .then(response => dispatch({ type: 'FETCH_LAST_FULFILLED', payload: response.data }))
    .catch(error => dispatch({ type: 'FETCH_LAST_REJECTED', payload: error.data }));
  };
}

export function fetchTotalScore() {
  return function (dispatch) {
    axios.get('https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/total_score/?quantity=10',
      {
        headers: { Authorization: `token ${localStorage.getItem('token')}` },
      })
    .then(response => dispatch({ type: 'FETCH_TOTAL_FULFILLED', payload: response.data }))
    .catch(error => dispatch({ type: 'FETCH_TOTAL_REJECTED', payload: error.data }));
  };
}
