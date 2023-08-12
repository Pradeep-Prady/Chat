import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.authState);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={isSticky ? "nav sticky" : "nav"}>
      <div className="logo">
        <Link to="/" className="text">
          Chat
        </Link>
      </div>

      <div className="link">
        {isAuthenticated ? (
        <>
          <Link to="/myprofile" className="form-group profile-container">
            <img src={user.avatar  ?? "/images/default_avatar.png"} alt="profile=" />
            <label>{user.name}</label>
          </Link>
        </>
         ) : (
          <Link to="/login" className="nav-btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
