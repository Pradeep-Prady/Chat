import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAuthError, forgotPassword } from "./../../actions/userAtions";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { error, message, loading } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    if (message) {
      toast(message, {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setEmail("");
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
  }, [error, message, dispatch]);

  return (
    <>
      <div className="login ">
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} encType="multipart/form-data">
              <h3>Forgot Password</h3>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Enter your Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button className="btn" type="submit" disabled={loading}>
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
