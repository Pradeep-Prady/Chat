import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReview,
  getAdminReviews,
  getReview,
  updateReview,
} from "../../actions/reviewActions";
import {
  clearError,
  clearReviewDeleted,
  clearReviewUpdated,
} from "../../slices/reviewSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../layouts/Loader";

export default function ReviewDetail() {
  const { isReviewDeleted, isreviewUpdated, review, error, loading } =
    useSelector((state) => state.reviewsState);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  var createdAt = String(review.createdAt);
  var date = new Date(createdAt);

  var optionsTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  var formattedTime = date.toLocaleTimeString("en-GB", optionsTime);

  var optionsDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  var formattedDate = date.toLocaleDateString("en-GB", optionsDate);

  const deleteHandler = () => {
    dispatch(deleteReview(review._id));
  };

  const [show, setShow] = useState(review?.status);

  const submitHandler = () => {
    const formData = new FormData();
    formData.append("status", show);
    dispatch(updateReview(formData, id));
  };

  useEffect(() => {
    if (isreviewUpdated) {
      toast.success("Review Updated Successfully", {
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
      dispatch(clearReviewUpdated());
      dispatch(getAdminReviews(show));
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
    }

    if (!review._id || isreviewUpdated) {
      dispatch(getReview(id));
    }
  }, [isreviewUpdated, id, error, dispatch]);

  useEffect(() => {
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
    }


    if (isReviewDeleted) {
      toast.success("Review Deleted Successfully", {
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
      dispatch(clearReviewDeleted());
      navigate(`/admin/reviews`);
    }
  }, [isReviewDeleted, id, error, dispatch, navigate]);

  useEffect(() => {
    dispatch(getReview(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="w-full h-screen bg-stone-900 flex items-center justify-center">
            <div className="flex-none carousel-item w-[250px] h-auto p-5 m-5 glass overflow-hidden ">
              <div className="flex justify-between items-center">
                <select
                  className="bg-stone-900 outline-0 text-white py-1 px-2 rounded-sm "
                  onChange={(e) => setShow(e.target.value)}
                  value={show}
                >
                  <option>Select</option>
                  <option value="true">Show</option>
                  <option value="false">Hide</option>
                </select>

                <button
                  className="bg-stone-900 text-white py-1 px-2 rounded-sm mx-2"
                  onClick={submitHandler}
                >
                  Update
                </button>

                <i
                  onClick={deleteHandler}
                  className="fa-solid fa-trash hover:text-red-600 cursor-pointer"
                ></i>
              </div>
              <div className="w-full mt-2">
                <p className="text-sm font-bold ">
                  Review Status :{" "}
                  <span
                    className={` ${
                      review.status === "true" ? "text-white" : "text-red-500"
                    }`}
                  >
                    {review.status}
                  </span>
                </p>
              </div>

              <div className="my-2">
                <h3 className="text-sm  text-stone-500">
                  {review?.user?.name}
                </h3>
                <a
                  href={`mailto:${review?.user?.email}`}
                  className="text-sm text-stone-400"
                >
                  {review?.user?.email}
                </a>
              </div>

              <h3 className="text-sm font-semibold ">
                <a href={`mailto:${review.email}`}>{review.email}</a>
              </h3>
              <p className="text-white pt-5">{review.message}</p>

              <div className="flex justify-between my-2 text-stone-500 ">
                <h3 className="text-xs font-semibold ">{formattedTime}</h3>
                <p className="text-xs font-semibold">{formattedDate}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
