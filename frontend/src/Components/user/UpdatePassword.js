import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAuthError, updatePassword as updatePasswordAction } from "./../../actions/userAtions";

function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const dispatch = useDispatch();
  const { isUpdated, error } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("password", password);
    dispatch(updatePasswordAction(formData));
  };

  useEffect(() => {
    if (isUpdated) {
      toast("Password updated successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setOldPassword("");
      setPassword("");
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
  }, [error, isUpdated, dispatch]);

  return (
    <>
      <div className="login ">
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} encType="multipart/form-data">
              <h3>Update Password</h3>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Old Password"
                  required
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="btn" type="submit" >
                Update Password
              </button>

               
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatePassword;
