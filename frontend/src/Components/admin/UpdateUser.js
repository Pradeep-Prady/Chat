import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../actions/userActions";
import { clearUserUpdated } from "../../slices/userSlice";
import { clearError } from "../../slices/authSlice";
import MetaData from "../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { id: userId } = useParams();

  const dispatch = useDispatch();

  const { loading, isUserUpdated, error, user } = useSelector(
    (state) => state.userState
  );
  const { user: authUser } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("role", role);
    dispatch(updateUser(userId, formData));
  };

  useEffect(() => {
    if (isUserUpdated) {
      toast.success("User Updated Successfully", {
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
      dispatch(clearUserUpdated());

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
      dispatch(clearError());

      return;
    }

    dispatch(getUser(userId));
  }, [isUserUpdated, error, userId, dispatch]);

  useEffect(() => {
    if (user._id) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [user]);

  return (
    <>
      <MetaData title={"Update User"} />
      <div
        className="relative z-10 w-full h-screen flex items-center justify-center text-white login"
        id="login"
      >
        <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-7 px-5">
          <form className="text-center" onSubmit={submitHandler}>
            <h2 className="text-3xl ">Update Profile</h2>

            <div className="my-2 flex items-center justify-center">
              <div className="flex w-[60px] h-[60px] overflow-hidden rounded-lg">
                <img
                  // src={avatarPreview}
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
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Role</label>
              </div>
              <div className="flex ">
                <select
                  disabled={user._id === authUser._id}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-white bg-transparent outline-0"
                  id="category_field"
                >
                  <option value="admin" className="bg-black text-white">
                    Admin
                  </option>
                  <option value="user" className="bg-black text-white">
                    User
                  </option>
                </select>
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

        <div className=" bg-black w-full bottom-0 right-0 fixed flex items-start justify-evenly p-3 ">
          <Link
            to="/profile/update"
            className="text-white flex items-start justify-center"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>

          <Link
            to="/profile"
            className="text-black bg-white py-1.5 px-2 rounded-lg flex items-start justify-center"
          >
            {/* <i className="fa-solid fa-plus"></i> */}
            <i className="fa-solid fa-angle-down"></i>
          </Link>

          <button
            //   onClick={logoutHandler}
            className="text-white flex items-start justify-center"
          >
            <i className="fa-solid fa-arrow-right-from-bracket "></i>
          </button>
        </div>
      </div>
    </>
  );
}
