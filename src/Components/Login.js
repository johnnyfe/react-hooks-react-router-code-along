import React from "react"

function Login(){
    return (
      <div>
        <form>
            <h1>Login</h1>
          <div>
            <input type="text" name="username" placeholder="Username"/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="text" name="password" placeholder="Password"/>
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }

export default Login