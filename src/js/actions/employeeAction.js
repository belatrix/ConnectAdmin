import axios from 'axios'
import actionHelper from '../utils/actionsHelper'
import * as types from '../constants/actionTypes'

export function fetchEmployeesList() {
  return function(dispatch) {
    actionHelper.dispatchGet(
        dispatch,
        "https://bxconnectdev.herokuapp.com:443/api/employee/list/",
        types.FETCH_LIST_EMPLOYEES_FULFILLED,
        types.FETCH_LIST_EMPLOYEES_REJECTED);
  }
}
