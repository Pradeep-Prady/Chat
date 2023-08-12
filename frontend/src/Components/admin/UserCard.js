import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../../actions/userActions";
import { clearError } from "../../slices/authSlice";
import { clearUserDeleted } from "../../slices/userSlice";

export default function UserCard({ user }) {
  const {
    users = [],
    loading = true,
    error,
    isUserDeleted,
  } = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  const deleteHandler = (e, id) => {
    e.target.disabled = true;
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearError());

      return;
    }
    if (isUserDeleted) {
      dispatch(clearUserDeleted());

      return;
    }

    dispatch(getUsers);
  }, [dispatch, error, isUserDeleted]);

  return (
    <div className="bg-stone-900 m-3 py-3 rounded-md text-center">
      <div className="flex items-center justify-center">
        <img
          src={user?.avatar}
          alt="user-profile"
          className="w-[60px] h-[60px]"
        />
      </div>
      <div className="my-2 text-sm text-white ">
        <p>{user?.name}</p>
        <p className="w-full">{user?.email}</p>
        <p>{user?.role}</p>
      </div>
      <div className="flex justify-evenly items-center mt-3">
        <Link to={`/admin/user/${user._id}`}>
          <button className="bg-stone-950 text-white text-sm py-2 px-4 rounded-md">
            Update User
          </button>
        </Link>

        <button
          onClick={(e) => deleteHandler(e, user._id)}
          className="bg-stone-950 text-white text-sm py-2 px-4 rounded-md"
        >
          Delete User
        </button>
      </div>
    </div>
  );
}
