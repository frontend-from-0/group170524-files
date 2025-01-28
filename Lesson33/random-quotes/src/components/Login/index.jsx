import React, { useState } from "react";
import { login } from "../../auth";
import "./styles.css";

export const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setCurrentPage("home");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleLogin} className="form">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="form-input"
      />
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="form-input"
      />
      <button type="submit" className="btn--primary">Login</button>
    </form>
    </>
  );
};
