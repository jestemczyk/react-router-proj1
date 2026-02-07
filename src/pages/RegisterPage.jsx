import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";

export const RegisterPage = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      username: usernameRef.current.value,
      email: passwordRef.current.value,
    };
    const token = true;

    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("token", JSON.stringify(token));
    navigate("/");
  }
  return (
    <div>
      <h1>Please register</h1>
      <form onSubmit={handleSubmit}>
        <p>Enter your username</p>
        <input type="text" required ref={usernameRef} />
        <p>Enter your password</p>
        <input type="password" required ref={passwordRef} />
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Submit
        </button>
      </form>

      <Link to={"/"}>
        <button>Back to main page</button>
      </Link>
    </div>
  );
};
