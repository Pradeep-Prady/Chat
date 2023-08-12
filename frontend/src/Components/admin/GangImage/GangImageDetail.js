import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteGangImage,
  getGangImage,
} from "../../../actions/gangImageActions";
import { toast } from "react-hot-toast";
import { clearGangImageDeleted } from "../../../slices/gangImageSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function GangImageDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    gangImage = {},
    loading,
    isGangImageDeleted,
    error,
  } = useSelector((state) => state.gangImageState);

  const { id } = useParams();

  const deleteHandler = (e, id) => {
    console.log(id);
    e.target.disabled = true;
    dispatch(deleteGangImage(id));
  };

  useEffect(() => {
    if (isGangImageDeleted) {
      toast.success("Review Posted Successfully", {
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

      dispatch(clearGangImageDeleted());
      navigate("/admin/gang");

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
    }

    dispatch(getGangImage(id));
  }, [id, isGangImageDeleted, dispatch, error]);

  return (
    <div className="w-full h-screen " key={id}>
      <div className="w-full h-4/5 flex items-center justify-center bg-slate-600 ">
        <img className="w-auto h-full" src={gangImage?.image} alt="gangimage" />
      </div>
      <div className="w-full h-1/5 bg-stone-700 flex items-center justify-center">
        <button
          className="text-white py-2 px-3 rounded-sm bg-stone-950 "
          onClick={(e) => deleteHandler(e, gangImage._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
