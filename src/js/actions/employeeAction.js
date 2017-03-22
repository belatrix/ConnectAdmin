import { dispatchGet } from '../utils/actionsHelper';
import { FETCH_LIST_EMPLOYEES } from '../constants/actionTypes';
import * as globalConstants from '../constants/config';

export default function fetchEmployeesList() {
  return dispatch =>
    dispatchGet(
        dispatch,
        FETCH_LIST_EMPLOYEES,
        `${globalConstants.SERVER_BASE_URL}/employee/list/`,
        );
}
