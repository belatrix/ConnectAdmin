import { dispatchGet } from '../utils/actionsHelper';

export function fetchCurrentScore() {
  return dispatch => dispatchGet(
    dispatch,
    'FETCH_CURRENT',
    'https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/current_month_score/?quantity=10',
    );
}

export function fetchLastMonthScore() {
  return dispatch => dispatchGet(
    dispatch,
    'FETCH_LAST',
    'https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/last_month_score/?quantity=10',
    );
}

export function fetchTotalScore() {
  return dispatch => dispatchGet(
    dispatch,
    'FETCH_TOTAL',
    'https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/total_score/?quantity=10',
    );
}
