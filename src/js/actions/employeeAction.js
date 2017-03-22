import { dispatchGet } from '../utils/actionsHelper';
import { FETCH_LIST_EMPLOYEES } from '../constants/actionTypes';

export default function fetchEmployeesList() {
  return dispatch =>
    dispatchGet(
        dispatch,
        FETCH_LIST_EMPLOYEES,
        'https://bxconnectdev.herokuapp.com:443/api/employee/list/',
        );
}
