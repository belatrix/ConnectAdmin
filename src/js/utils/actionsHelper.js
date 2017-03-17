import axios from 'axios';

const actionsHelper = {
  dispatchGet(dispatch, url, fullfilledAction, rejectedAction) {
    return axios.get(url,
    {
      headers: {"Authorization": "token " + localStorage.getItem("token")}
    })
    .then((response) => {
      dispatch({type: fullfilledAction, payload: response.data});
    }).catch((error) => {
      dispatch({type: rejectedAction, payload: error.data})
    })    
  },
  dispatchPost(dispatch, url, data, fullfilledAction, rejectedAction, successCallback) {
    return axios.post(url,data)
    .then((response) => {
      dispatch({type: fullfilledAction, payload: response.data});
      successCallback(response);
    }).catch((error) => {      
      dispatch({type: rejectedAction, payload: error.data})      
    })    
  }  
};

export default actionsHelper;