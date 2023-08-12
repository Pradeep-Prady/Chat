import React, { useState } from "react";
import img from "../../assets/images/default_avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import Loader from "./../layouts/Loader";
import MetaData from "./../layouts/MetaData";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout);
    navigate("/login");
  };

  const { user, loading } = useSelector((state) => state.authState);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Profile"} />
          <div className="w-full h-screen overflow-hidden bg">
            <div className="flex items-center justify-center my-2">
              <div className="w-[100px] h-[100px]  bg-black rounded-md overflow-hidden">
                <img
                  src={user?.avatar ?? img}
                  alt="img"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="text-center my-2">
              {user.role === "admin" ? (
                <Link to="/admin/dashboard">
                  <p>{user?.name}</p>
                </Link>
              ) : (
                <p>{user?.name}</p>
              )}

              <p>{user?.email}</p>
            </div>

            <div className="border-t-2 text-center">
              <h2 className="py-2">
                {" "}
                <div className=" bottom-2 left-0 z-30 w-full flex items-center justify-center">
                  {/* <Link to="/gang/image/upload">
                    <button className="bg-stone-950 py-1 px-3 text-white text-sm rounded-md ">
                      Upload Images
                    </button>
                  </Link> */}
                  <a
                    href="https://forms.gle/NkaNNpYV1cc6cpBU8"
                    className="bg-stone-950 py-1 px-3 text-white text-sm rounded-md "
                  >
                    Upload Images
                  </a>
                </div>
              </h2>
            </div>

            <div className=" glass w-full bottom-0 right-0 fixed flex items-start justify-evenly p-3  md:p-5">
              <Link
                to="/profile/update"
                className="text-black  bg-white py-1.5 px-2 rounded-lg  flex items-start justify-center"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>

              <Link
                to="/"
                className="text-white bg-black py-1.5 px-2 rounded-lg flex items-start justify-center"
              >
                <i className="fa-solid fa-angle-down"></i>
              </Link>

              <button
                onClick={logoutHandler}
                className="text-black   bg-white py-1.5 px-2 rounded-lg flex items-start justify-center"
              >
                <i className="fa-solid fa-arrow-right-from-bracket "></i>
              </button>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}
