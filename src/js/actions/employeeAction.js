import {dispatchGet} from '../utils/actionsHelper.js';

export default function fetchEmployeesList() {
  return function (dispatch) {
    dispatchGet(
        dispatch,
        'FETCH_LIST_EMPLOYEES',
        'https://bxconnectdev.herokuapp.com:443/api/employee/list/'
        );
  };
}
