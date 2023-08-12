import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
 
  clearAuthError,
  updateProfile,
} from "./../../actions/userAtions";
import { clearUpdateProfile } from "../../slices/authSlice";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.png"
  );

  const dispatch = useDispatch();
  const {   error, user, isUpdated } = useSelector(
    (state) => state.authState
  );

  const onChangeAvatar = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", avatar);
    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      if (user.avatar) {
        setAvatarPreview(user.avatar);
      }
    }

    if (isUpdated) {
      toast("Profile updated successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearUpdateProfile()),
      });
      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [error, dispatch, user, isUpdated]);

  return (
    <>
      <div className="login ">
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} encType="multipart/form-data">
              <h3>Update  Profile</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Name"
                  // required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Email Address"
                  // required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                {/* <img src={avatarPreview} style={{ width: "50px" }} /> */}
                <label>Avatar</label>
                <input
                  type="file"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Avatar"
                  style={{ width: "200px" }}
                  onChange={onChangeAvatar}
                  name="avatar"
                />
              </div>
              <div className="form-group">
                <img
                  src={avatarPreview}
                  alt="profilephoto"
                  className="profilephoto"
                />
              </div>

              <button className="btn" type="submit" >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
