import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clearAuthError,
  updatePassword as updatePasswordAction,
} from "../../actions/userActions";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const dispatch = useDispatch();
  const { isUpdated, error, loading } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("password", password);
    dispatch(updatePasswordAction(formData));
  };

  useEffect(() => {
    if (isUpdated) {
      toast.success("Secret Code Changed", {
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
      setOldPassword("");
      setPassword("");
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
  }, [error, isUpdated, dispatch]);

  return (
    <>
      <MetaData title={"Update Password"} />{" "}
      <div
        className="relative z-10 w-full h-screen flex items-center justify-center text-black bg"
        id="login"
      >
        <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-7 px-5">
          <form className="text-center" onSubmit={submitHandler}>
            <h2 className="text-3xl">Change Password</h2>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Old Password *</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2 border-black"
                  type="password"
                  name="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Password *</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2 border-black"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
          </form>
        </div>
        <div className=" glass w-full bottom-0 right-0 fixed flex items-start justify-evenly p-3  md:p-5">

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
            {/* <i className="fa-solid fa-plus"></i> */}
            <i className="fa-solid fa-angle-down"></i>
          </Link>

          <Link
           to='/profile/update'
           className="text-black   bg-white py-1.5 px-2 rounded-lg flex items-start justify-center"


          >
            <i className="fa-solid fa-arrow-right-from-bracket "></i>
          </Link>
        </div>
      </div>
    </>
  );
}
