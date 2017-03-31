import { dispatchGet } from '../utils/actionsHelper';
import { FETCH_USER } from '../constants/actionTypes';
import * as globalConstants from '../constants/config';

export default function fetchUserInfo() {
  return dispatch =>
    dispatchGet(
        dispatch,
        FETCH_USER,
        `${globalConstants.SERVER_BASE_URL}/employee/${localStorage.getItem('id')}/`,
        );
}
