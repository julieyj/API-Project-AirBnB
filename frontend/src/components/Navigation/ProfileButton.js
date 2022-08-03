import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";


function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const sessionUser = useSelector(state => state.session.user);
  console.log("sessionUser:", sessionUser);


  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
  };

  return (
    <>
    <nav className="profile-button-container">
      <button className="profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
          <svg
            className="menu-svg"
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
              stroke: "#222222",
              strokeWidth: "3",
              overflow: "visible",
            }}
          >
          <g fill="none" fillRule="nonzero">
            <path d="m2 16h28"></path>
            <path d="m2 24h28"></path>
            <path d="m2 8h28"></path>
          </g>
        </svg>
        <svg
          className="user-svg"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            height: "100%",
            width: "100%",
            fill: "#717171",
          }}
        >
          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
        </svg>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <span className="text">{sessionUser.firstName} {sessionUser.lastName}</span>
          <span className="text">{sessionUser.email}</span>
          <span>
            <button className="logout-button" onClick={logout}>Log Out</button>
          </span>
          <span>
            {!sessionUser && (
              <button className="demo-button" onClick={() => {
                dispatch(sessionActions.login({credential: "demo@user.io", password: "password"}))
              }}>
                Demo User
              </button>
            )}
          </span>
        </div>
      )}
    </nav>
    </>
  );
}

export default ProfileButton;
