import { dispatchPost } from '../utils/actionsHelper';

export default function getAuth(login) {
  return dispatch => dispatchPost(
      dispatch,
        'https://bxconnectdev.herokuapp.com:443/api/employee/authenticate/',
    {
      username: login.state.username,
      password: login.state.password,
    },
      'FETCH_AUTH_FULFILLED',
      'FETCH_AUTH_REJECTED',
      (response) => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          login.props.router.go('/dashboard');
        }
      });
}
