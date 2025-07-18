import React from "react";

function Login() {
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type="text" placeholder="eg: john@gmail.com ..." />
        <label>Password</label>
        <input type="text" placeholder="eg: s@9***** ..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
