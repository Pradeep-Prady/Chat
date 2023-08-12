import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { login, clearAuthError } from "./../../actions/userActions";
import MetaData from "./../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      // toast.success("Test Case Passed", {
      //   position: "bottom-center",
      //   duration: 2000,
      //   style: {
      //     border: "1px solid white",
      //     backgroundColor: "black",
      //     color: "white",
      //   },
      // });
      navigate("/");
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
        icon: "😥",
      });
      dispatch(clearAuthError);

      return;
    }
  }, [error, isAuthenticated, dispatch, navigate]);

  return (
    <>
      <MetaData title={"Login"} />
      <div
        className="relative z-10 w-full h-screen flex items-center  justify-center bg"
        id="login"
      >
        <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-7 px-5">
          <form className="text-center" onSubmit={submitHandler}>
            <h2 className="text-3xl">Login</h2>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label htmlFor="email">Email Address *</label>
              </div>
              <div className="flex">
                <input
                  className="w-full outline-0 rounded-sm bg-transparent border-black border-b-2"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label htmlFor="password">Password *</label>
              </div>
              <div className="flex">
                <input
                  className="w-full outline-0 rounded-sm bg-transparent border-b-2 border-black"
                  type="password"
                  id="password"
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
                Login
              </button>
            </div>

            <div>
              <Link to="/password/forgot">
                <p className="">forgot password?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
