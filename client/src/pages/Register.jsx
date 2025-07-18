import React from "react";

function Register() {
  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" placeholder="eg: john doe ..." />
        <label>Email</label>
        <input type="text" placeholder="eg: john@gmail.com ..." />
        <label>Password</label>
        <input type="text" placeholder="eg: s@9***** ..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
