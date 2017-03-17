import axios from 'axios'
import actionHelper from '../utils/actionsHelper'
import * as types from '../constants/actionTypes'

export function fetchCurrentScore() {
  return function(dispatch) {
    console.log(types);
    actionHelper.dispatchGet(
        dispatch,
        "https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/current_month_score/?quantity=10",
        types.FETCH_CURRENT_FULFILLED,
        types.FETCH_CURRENT_REJECTED);    
  }
}

export function fetchLastMonthScore() {
  return function(dispatch) {
    actionHelper.dispatchGet(
        dispatch,
        "https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/last_month_score/?quantity=10",
        types.FETCH_LAST_FULFILLED,
        types.FETCH_LAST_REJECTED);
  }
}

export function fetchTotalScore() {
  return function(dispatch) {
    actionHelper.dispatchGet(
        dispatch,
        "https://bxconnectdev.herokuapp.com:443/api/admin/employee/top/total_score/?quantity=10"
      , types.FETCH_TOTAL_FULFILLED
      , types.FETCH_TOTAL_REJECTED);    
  }
}
