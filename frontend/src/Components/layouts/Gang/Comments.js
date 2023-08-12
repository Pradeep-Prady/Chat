import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../../assets/images/default_avatar.png";

import {
  createGangImageComment,
  getComments,
} from "../../../actions/gangImageActions";
import {
  clearCommentSubmitted,
  clearError,
} from "../../../slices/gangImageSlice";

function Comments({ id, commentsData }) {
  const [content, setContent] = useState("");

  const { isCommentSubmitted, error, comments } = useSelector(
    (state) => state.gangImageState
  );


  const dispatch = useDispatch();

  const CommentDate = (d) => {
    var createdAt = String(d);
    var date = new Date(createdAt);

    var optionsDate = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    var formattedDate = date.toLocaleDateString("en-GB", optionsDate);

    return formattedDate;
  };

  const commentHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    formData.append("gangImageId", id);
    dispatch(createGangImageComment(formData));
    setContent("");
  };

  useEffect(() => {
    if (isCommentSubmitted) {
      dispatch(clearCommentSubmitted());
      dispatch(getComments(id));
    }
    if (error) {
      dispatch(clearError());

      return;
    }
  }, [dispatch, isCommentSubmitted, id, error]);

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="w-full h- flex-row items-center justify-center">
        <div className="w-full h-1/5 flex items-center justify-center">
          <form
            onSubmit={commentHandler}
            className="w-full sm:w-4/6 md:w-3/6 flex  glass mx-2 "
          >
            <input
              type="text "
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your Comment"
              className="w-4/5 p-2 bg-transparent outline-none text-black border-r-4"
            />
            <div className="w-1/5 flex items-center justify-center">
              <button type="submit">
                <i className="fa-solid fa-paper-plane text-xl text-black"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="w-full flex h-4/5 items-center justify-center">
          <div className="w-full h-full sm:w-8/12 md:w-6/12 ">
            <div className="overflow-y-scroll w-full h-4/5  p-3 scroll  z-10 rounded-lg">
              {comments?.map((comment) => (
                <div
                  className="flex glass p-2 my-2 rounded-sm "
                  key={comment._id}
                >
                  <div className="w-1/5 h-[50px] ">
                    <img
                      src={comment?.user?.avatar ? comment.user.avatar : img}
                      alt="profile"
                      className="w-[40px] h-[40px] rounded-3xl"
                    />
                  </div>
                  <div className="ml-2 w-4/5">
                    <div className="flex justify-between">
                      <p className="text-xs text-stone-400">
                        {comment?.user?.name}
                      </p>
                      <p className="text-xs text-stone-400">
                        {CommentDate(comment.createdAt)}
                      </p>
                    </div>
                    <p className="text-sm text-stone-950">
                      {" "}
                      {comment?.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
