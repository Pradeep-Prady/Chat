import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";
import { logout } from "./../../actions/userAtions";

function Profile() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout);
  };

  const { user } = useSelector((state) => state.authState);
  return (
    <div className="myprofile">
      <div className="user-info">
        <div className="user-img">
          <figure className="avatar avatar-profile">
            <img
              className="profile img"
              src={user.avatar ?? "/images/default_avatar.png"}
              alt="profile"
            />
          </figure>
          <Link to="/myprofile/update" id="edit_profile" className="btn">
            Edit Profile
          </Link>
        </div>

        <div className="details">
          <h4>Full Name</h4>
          <p>{user.name}</p>

          <h4>Email Address</h4>
          <p>{user.email}</p>

          <h4>Joined</h4>
          <p>{String(user.createdAt).substring(0, 10)}</p>

          <Link
            to="/myprofile/update/password"
            className="btn btn-primary btn-block mt-3"
          >
            Change Password
          </Link>
          <Link onClick={logoutHandler} className="btn logout">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
