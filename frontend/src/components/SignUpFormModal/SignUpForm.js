import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
// import "./SignupForm.css";

function SignupFormPage({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signupUser({ email, firstName, lastName, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="modal-title-signup">
        <div
          className="signup-close"
          // type="button"
          onClick={() => setShowModal(false)}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: "3", overflow: "visible",}}
          >
            <path d="m6 6 20 20"></path>
            <path d="m26 6-20 20"></path>
          </svg>
        </div>
        <span className="signup-title">Sign up</span>
      </div>
      <div className="signup-divider">

      </div>
      <div className="modal-body-signup">
        <div className="signup-errors-container">
          {errors.map((error, idx) => (
            <span key={idx}>Error: {error}</span>
          ))}
        </div>
        <label className="label-1">
          Email
          <div>
            <input
              className="sign-up-input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </label>
        <label className="label-1">
          First Name
          <div>
            <input
              className="sign-up-input"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
        </label>
        <label className="label-1">
          Last Name
          <div>
            <input
              className="sign-up-input"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </label>
        <label className="label-1">
          Password
          <div>
            <input
              className="sign-up-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </label>
        <label className="label-1">
          Confirm Password
          <div>
            <input
              className="sign-up-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </label>
      <button className="sign-up-submit-button" type="submit">
        Continue
      </button>
      </div>
    </form>
  );
}

export default SignupFormPage;
