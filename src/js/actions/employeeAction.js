import axios from "axios"

export function fetchEmployeesList() {

  return function(dispatch) {
    axios.get("https://bxconnectdev.herokuapp.com:443/api/employee/list/",
  {
    headers: {"Authorization": "token " + localStorage.getItem("token")}
  })
    .then((response) => {
      dispatch({type: "FETCH_LIST_EMPLOYEES_FULFILLED", payload: response.data});
    }).catch((error) => {
      dispatch({type: "FETCH_LIST_EMPLOYEES_REJECTED", payload: error.data})
    })
  }

}
