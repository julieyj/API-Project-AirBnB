import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

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
    <nav>
      <button className="profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <span>{user.firstName}</span>
          <span>{user.email}</span>
          <span>
            <button onClick={logout}>Log Out</button>
          </span>
          <span>
            {!user && (
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
