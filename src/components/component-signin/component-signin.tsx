import React, { useState } from "react";
import "./component-signin.scss";
import { useNavigate } from "react-router-dom";
import { Api } from "../../api/url";

function Signin() {
  const [username, setUserName] = useState(Api.UserName);
  const [password, setPassword] = useState(Api.Password);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`${Api.Login}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("accessToken", result.token);
        navigate("/");
      });
  };

  return (
    <div className="loginContainer">
      <div className="header">Sign In</div>
      <form>
        <div className="section">
          <label className="label" htmlFor="username">
            User Name
          </label>
          <input
            required
            className="inputField"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            required
            className="inputField"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="footer">
          <button onClick={handleSubmit} className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
