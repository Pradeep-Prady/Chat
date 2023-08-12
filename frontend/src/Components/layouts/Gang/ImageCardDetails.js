import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments, getGangImage } from "../../../actions/gangImageActions";
import Comments from "./Comments";
import {
  clearCommentSubmitted,
  clearError,
} from "../../../slices/gangImageSlice";

export default function ImageCardDetails({ indexValue }) {
  const { id } = useParams();
  const {
    gangImage = {},
    isCommentSubmitted,
    error,
    comments = [],
  } = useSelector((state) => state.gangImageState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isCommentSubmitted) {
      dispatch(clearCommentSubmitted());
      dispatch(getComments(id));
    }
    if (error) {
      dispatch(clearError());
    }
  }, [dispatch, isCommentSubmitted, id, error]);

  useEffect(() => {
    dispatch(getGangImage(id)); // Fetch the specific image details
  }, [dispatch, id]);

  return (
    <div className="w-full h-screen  flex-row items-center justify-center ">
      <div className="w-auto h-2/5 flex items-center justify-center">
        <img src={gangImage?.image} alt="GangImage" className="h-full w-auto" />
      </div>

      <div className={`my-5`}>
        <Comments id={id} commentsData={comments} />
      </div>
    </div>
  );
}
