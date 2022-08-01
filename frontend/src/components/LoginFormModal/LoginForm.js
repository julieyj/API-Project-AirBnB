import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm( { setShowModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="login-form-modal" onSubmit={handleSubmit}>
      <div className="modal-title-login">
        <div
          className="login-close"
          onClick={() => setShowModal(false)}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: "3",
              overflow: "visible",
            }}
          >
            <path d="m6 6 20 20"></path>
            <path d="m26 6-20 20"></path>
          </svg>
        </div>
        <h3 className="login-title">Log in</h3>
      </div>
      <div className="divider">
        <div className="modal-title-welcome">
          <span>Welcome to Airbnb</span>
        </div>
        <div className="modal-body-login">
          <div className="login-errors-container">
            {errors.map((error, idx) => (
              <span key={idx}>Error: {error}</span>
            ))}
          </div>
          <label className="label-1">
            Email{" "}
            <div>
              <input
                className="email-password"
                type="text"
                value={credential}
                placeholder={"Email"}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="label-1">
            Password{" "}
            <div>
              <input
                className="email-password"
                type="password"
                value={password}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
        </div>
        <button className="login-button" type="submit">
          Continue
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
