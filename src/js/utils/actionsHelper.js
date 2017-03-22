import axios from 'axios';

export function dispatchGet(dispatch, type, url) {
  return dispatch({
    type,
    payload: axios.get(url, { headers: { Authorization: `token ${localStorage.getItem('token')}` } }),
  });
}

export function dispatchPost(dispatch, url, data, fullfilledAction, rejectedAction, afterDispatch) {
  return axios.post(url, data)
      .then((response) => {
        dispatch({ type: fullfilledAction, payload: response.data });
        return response;
      })
      .then(response => afterDispatch(response))
      .catch((error) => {
        dispatch({ type: rejectedAction, payload: error.data });
      });
}
