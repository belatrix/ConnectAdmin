import { dispatchGet } from '../utils/actionsHelper';
import { FETCH_CURRENT, FETCH_LAST, FETCH_TOTAL } from '../constants/actionTypes';
import * as globalConstants from '../constants/config';

export function fetchCurrentScore() {
  return dispatch => dispatchGet(
    dispatch,
    FETCH_CURRENT,
    `${globalConstants.SERVER_BASE_ADMIN_URL}/employee/top/current_month_score/?quantity=10`,
    );
}

export function fetchLastMonthScore() {
  return dispatch => dispatchGet(
    dispatch,
    FETCH_LAST,
    `${globalConstants.SERVER_BASE_ADMIN_URL}/employee/top/last_month_score/?quantity=10`,
    );
}

export function fetchTotalScore() {
  return dispatch => dispatchGet(
    dispatch,
    FETCH_TOTAL,
    `${globalConstants.SERVER_BASE_ADMIN_URL}/employee/top/total_score/?quantity=10`,
    );
}
