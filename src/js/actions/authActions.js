import axios from 'axios'
import actionHelper from '../utils/actionsHelper'
import * as types from '../constants/actionTypes'

export function getAuth(login) {
  console.log(login.props.router);

  return function(dispatch) {
    actionHelper.dispatchPost(
        dispatch,
        "https://bxconnectdev.herokuapp.com:443/api/employee/authenticate/",
        {
          username: login.state.username,
          password: login.state.password
        },
        types.FETCH_AUTH_FULFILLED,
        types.FETCH_AUTH_REJECTED,
        (response) => {
          if(response.data.token){
              localStorage.setItem("token", response.data.token);
              login.props.router.go('/dashboard')
          }else{
              console.info('There is not token response')
          }
    });    
  }
}
