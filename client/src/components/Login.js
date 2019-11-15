import React, {useState} from "react";
import {axiosWithAuth} from "../util/axiosWithAuth"

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
      username: "",
      password: ""
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        console.log("login",res)
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected")
      })
      .catch(err => console.log(err.response))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div>
        <form onSubmit={handleLogin}>
          <input type="text" 
          name="username" 
          placeholder="Username" 
          //value={credentials.username} 
          onChange={handleChange} />
          
          <input type="password" name="password" placeholder="Username" 
          //value={credentials.password} 
          onChange={handleChange} />

          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
