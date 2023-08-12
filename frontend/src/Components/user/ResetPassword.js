import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAuthError, resetPassword } from "./../../actions/userAtions";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
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
      toast("Password Reset Success!", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      navigate("/");
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
  }, [isAuthenticated, error, navigate, dispatch]);

  return (
    <>
      <div className="login ">
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} encType="multipart/form-data">
              <h3>Reset Password</h3>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Password"
                  // required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  // required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button className="btn" type="submit" disabled={loading}>
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
