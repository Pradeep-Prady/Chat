import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, updateProfile } from "../../actions/userActions";
import { clearUpdateProfile } from "../../slices/authSlice";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.png"
  );

  const dispatch = useDispatch();
  const { error, user, isUpdated, loading } = useSelector(
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
      toast.success("Profile Updated Successfully", {
        position: "bottom-center",
        duration: 2000,
        style: {
          border: "1px solid white",
          background: "rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          color: "white",
        },
      });
      dispatch(clearUpdateProfile());

      return;
    }

    if (error) {
      toast.error(error, {
        position: "bottom-center",
        duration: 2000,
        style: {
          border: "1px solid white",
          background: "rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          color: "white",
        },
      });
      dispatch(clearAuthError);

      return;
    }
  }, [error, dispatch, user, isUpdated]);

  return (
    <>
      <MetaData title={"Update Profile"} />{" "}
      <div
        className="relative z-10 w-full h-screen flex items-center justify-center text-black bg"
        id="login"
      >
        <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-5 px-5">
          <form className="text-center" onSubmit={submitHandler}>
            <h2 className="text-3xl ">Update Profile</h2>

            <div className="my-2 flex items-center justify-center">
              <div className="flex w-[60px] h-[60px] overflow-hidden rounded-lg">
                <img
                  src={avatarPreview}
                  className="w-full h-full"
                  alt="avtar-preview"
                />
              </div>
            </div>

            <div className="mb-5 flex-row">
              <div className="flex my-2">
                <label>Name</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2 border-black"
                  type="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Email Address</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2 border-black"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Avatar</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full glass outline-0  rounded-sm bg-transparent border-b-2 border-black"
                  type="file"
                  name="avatar"
                  onChange={onChangeAvatar}
                />
              </div>
            </div>

            <div className="my-5">
              <button
                type="submit"
                disabled={loading}
                className="button-54 scale-75"
              >
                Update
              </button>
            </div>

            <div>
              <Link to="/profile/password">
                <p className="">Change Password</p>
              </Link>
            </div>
          </form>
        </div>

        <div className=" glass w-full bottom-0 right-0 fixed flex items-start justify-evenly p-3 ">
          <Link
            to="/profile/update"
            className="text-black  bg-white py-1.5 px-2 rounded-lg  flex items-start justify-center"

          >
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>

          <Link
            to="/profile"
            className="text-white bg-black py-1.5 px-2 rounded-lg flex items-start justify-center"
          >
            <i className="fa-solid fa-angle-down"></i>
          </Link>

          <Link
            to="/profile"
            className="text-black   bg-white py-1.5 px-2 rounded-lg flex items-start justify-center"

          >
            <i className="fa-solid fa-arrow-right-from-bracket "></i>
          </Link>
        </div>
      </div>
    </>
  );
}
