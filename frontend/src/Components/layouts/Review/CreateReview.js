import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, getReviews } from "../../../actions/reviewActions";
import { clearError, clearReviewSubmitted } from "../../../slices/reviewSlice";
import { toast } from "react-hot-toast";

export default function CreateReview() {

  const [message, setMessage] = useState("");
  const { isReviewSubmitted, error } = useSelector(
    (state) => state.reviewsState
  );

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("message", message);
    dispatch(createReview(formData));
  };

  useEffect(() => {
    if (isReviewSubmitted) {
      dispatch(clearReviewSubmitted());
      toast.success("Review Posted", {
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
      dispatch(getReviews());
      setMessage("");
    }

    if (error) {
      dispatch(clearError());
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

      return;
    }
  }, [dispatch, error, isReviewSubmitted]);

  return (
    <div className="w-full h-screen bg-stone-900 review relative z-10">
      <h2 className="text-center text-4xl font-light text-white pt-5">
        Write Review
      </h2>

      <div className="w-full h-full flex items-center justify-center">
        <form className=" py-10 px-5 md:w-[500px] " onSubmit={submitHandler}>
          <textarea
            style={{ resize: "none" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Please share your thoughts and write a review about your experience."
            className="outline-none border-0 p-2 h-[200px] w-full form-glass text-white rounded-md scroll"
          />
          <button
            type="submit"
            className="w-full my-2 py-2 button-54-white text-black rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
