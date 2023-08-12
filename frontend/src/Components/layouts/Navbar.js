import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);

  return (
    <div className="nav w-full flex justify-between p-3 md:p-7  z-50">
      <div>
        <a href="/" className="text-xl head-font ">
          Narikootam
        </a>
      </div>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/profile">
              <button className="scale-75 button-54">Profile</button>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <button className="scale-75 button-54">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
