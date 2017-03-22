import { dispatchPost } from '../utils/actionsHelper';
import { FETCH_AUTH_FULFILLED, FETCH_AUTH_REJECTED } from '../constants/actionTypes';
import * as globalConstants from '../constants/config';

export default function getAuth(login) {
  return dispatch => dispatchPost(
      dispatch,
        `${globalConstants.SERVER_BASE_URL}/employee/authenticate/`,
    {
      username: login.state.username,
      password: login.state.password,
    },
      FETCH_AUTH_FULFILLED,
      FETCH_AUTH_REJECTED,
      (response) => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          login.props.router.go('/dashboard');
        }
      });
}
