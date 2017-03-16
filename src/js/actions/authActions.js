import axios from "axios"

export function getAuth(login) {

  console.log(login.props.router)

  return function(dispatch) {
    axios.post("https://bxconnectdev.herokuapp.com:443/api/employee/authenticate/", {
      username: login.state.username,
      password: login.state.password
    })
    .then((response) => {
      dispatch({type: "FETCH_AUTH_FULFILLED", payload: response.data});

      if(response.data.token){
        localStorage.setItem("token", response.data.token);
        login.props.router.go('/dashboard')
      }else{
        console.info('There is not token response')
      }

    }).catch((error) => {
      dispatch({type: "FETCH_AUTH_REJECTED", payload: error.data})
    })
  }

}
