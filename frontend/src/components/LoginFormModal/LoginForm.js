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
      <div className="modal-title">
        <h3>Log in</h3>
      </div>
      <div className="modal-title-2">
        <h1>Welcome to Airbnb</h1>
      </div>
      <div className="modal-body">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <button
          className="close"
          type="button"
          onClick={() => setShowModal(false)}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="30"
            width="30"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
              fill="#484848"
            />
          </svg>
        </button>
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
    </form>
  );
}

export default LoginForm;
