import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register, clearAuthError } from "./../../actions/userAtions";

function Register() {
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
    if (isAuthenticated) {
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
  }, [error, isAuthenticated, dispatch, navigate]);

  return (
    <>
      <div className="login ">
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} encType="multipart/form-data">
              <h3>Register</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Name"
                  // required
                  onChange={onChange}
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
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Password"
                  // required
                  onChange={onChange}
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
                  onChange={onChange}
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

              <button className="btn" type="submit" disabled={loading}>
                Register
              </button>
              {/* <div className="form-group">
                <span className="fillerror">{fillError}</span>
              </div> */}

              <div className="form-group links">
                {/* <Link className="link" to="/password/forgot">forgot password?</Link> */}
                <Link className="link" to="/login">
                  Already have account Login?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
