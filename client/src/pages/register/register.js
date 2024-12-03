import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import apiRequest from "../../lib/api-request";

import React, { useState } from "react";

function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target);
    const name = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const user = { name, email, password };

    try {
      const response = await apiRequest.post("/auth/register", user);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
