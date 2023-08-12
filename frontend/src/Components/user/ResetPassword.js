import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  clearAuthError,
  loadUser,
  resetPassword,
} from "../../actions/userActions";
import MetaData from "../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.authState
  );

  const navigate = useNavigate();
  const { token } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    dispatch(resetPassword(formData, token));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Secret Key Changed", {
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
      navigate("/");
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
  }, [isAuthenticated, error, dispatch, navigate]);

  return (
    <>
      <MetaData title={"Reset Password"} />{" "}
      <div
        className="w-full h-screen flex items-center justify-center text-black login"
        id="login"
      >
        <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-7 px-5">
          <form className="text-center" onSubmit={submitHandler}>
            <h2 className="text-2xl">Reset Password</h2>

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
            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Confirm Password *</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2 border-black"
                  type="password"
                  name="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="my-5">
              <button
                type="submit"
                disabled={loading}
                className="button-54 scale-75"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
