import axios from 'axios';

export function fetchCurrentScore() {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_CURRENT',
      payload: axios.get('https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/current_month_score/?quantity=10', {headers: { Authorization: `token ${localStorage.getItem('token')}` }})
    });
  };
}

export function fetchLastMonthScore() {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_LAST',
      payload: axios.get('https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/last_month_score/?quantity=10', {headers: { Authorization: `token ${localStorage.getItem('token')}` }})
    });
  };
}

export function fetchTotalScore() {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_TOTAL',
      payload: axios.get('https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/total_score/?quantity=10', {headers: { Authorization: `token ${localStorage.getItem('token')}` }})
    });
  };
}
