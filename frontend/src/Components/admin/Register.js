import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthError,
  register,
  updateProfile,
} from "../../actions/userActions";
import { clearUpdateProfile } from "../../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import AdminBar from "./AdminBar";
import MetaData from "../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.png"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(e.target.files[0]);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("avatar", avatar);
    dispatch(register(formData));
  };

  useEffect(() => {
    // if (isAuthenticated) {
    //   navigate("/admin/dashboard");
    //   return;
    // }
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
  }, [error, isAuthenticated, dispatch, navigate]);
  return (
    <>
      <MetaData title={"Register"} />{" "}
      <div
        className="relative z-10 w-full h-screen flex items-center justify-center text-white  bg-stone-800"
        id="login"
      >
        <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-7 px-5">
          <form className="text-center" onSubmit={submitHandler}>
            <h2 className="text-3xl ">Register</h2>

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
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                  type="name"
                  name="name"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Email Address</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                  type="email"
                  name="email"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="mb-5 flex-row">
              <div className="flex my-2">
                <label>Password</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                  type="password"
                  name="password"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Avatar</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                  type="file"
                  name="avatar"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="my-5">
              <button
                type="submit"
                disabled={loading}
                className="button-54 scale-75"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <AdminBar />
      </div>
    </>
  );
}
