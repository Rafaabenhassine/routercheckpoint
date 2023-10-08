import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
    <input type="text" name="" required=""></input>

      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""></input>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    
  </form>

  
</div>
  )
}

export default Login






// import React from 'react'
// import "./Login.css"
// const Login = () => {
//   return (
//     <div class="login">
// 	<h1>Login</h1>
//     <form method="post">
//     	<input type="text" name="u" placeholder="Username" required="required" />
//         <input type="password" name="p" placeholder="Password" required="required" />
//         <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
//     </form>
// </div>
//   )
// }

// export default Login

{/* <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required="">
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="">
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div> */}