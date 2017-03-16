import axios from "axios";
import * as globalConstants from '../constants/config';

export function fetchCurrentScore() {

  return function(dispatch) {
    axios.get(`${globalConstants.SERVER_BASE_ADMIN_URL}/employee/top/current_month_score/?quantity=10`,
  {
    headers: {"Authorization": "token " + localStorage.getItem("token")}
  })
    .then((response) => {
      dispatch({type: "FETCH_CURRENT_FULFILLED", payload: response.data});
    }).catch((error) => {
      dispatch({type: "FETCH_CURRENT_REJECTED", payload: error.data})
    })
  }

}

export function fetchLastMonthScore() {

  return function(dispatch) {
    axios.get(`${globalConstants.SERVER_BASE_ADMIN_URL}/employee/top/last_month_score/?quantity=10`,
  {
    headers: {"Authorization": "token " + localStorage.getItem("token")}
  })
    .then((response) => {
      dispatch({type: "FETCH_LAST_FULFILLED", payload: response.data});
    }).catch((error) => {
      dispatch({type: "FETCH_LAST_REJECTED", payload: error.data})
    })
  }

}

export function fetchTotalScore() {

  return function(dispatch) {
    axios.get(`${globalConstants.SERVER_BASE_ADMIN_URL}/employee/top/total_score/?quantity=10`,
  {
    headers: {"Authorization": "token " + localStorage.getItem("token")}
  })
    .then((response) => {
      dispatch({type: "FETCH_TOTAL_FULFILLED", payload: response.data});
    }).catch((error) => {
      dispatch({type: "FETCH_TOTAL_REJECTED", payload: error.data})
    })
  }

}
