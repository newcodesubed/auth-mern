import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="text"
          placeholder="eg: john@gmail.com ..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="eg: s@9***** ..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
