import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "./../../../actions/reviewActions";
import ReviewCard from "./ReviewCard";
import Loader from "../Loader";

export default function Reviews() {
  const { reviews = {}, loading } = useSelector((state) => state.reviewsState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="w-full h-auto bg-stone-900">
            <h2 className="text-center text-4xl font-light text-white pt-5">
              Reviews
            </h2>

            <div className="flex px-5 py-12  overflow-x-scroll scroll ">
              {reviews && reviews?.length > 0 ? (
                reviews?.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))
              ) : (
                <div className=" w-full">
                  {" "}
                  <h2 className="text-center text-xl font-light text-stone-700 pt-5">
                    No reviews to display
                  </h2>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
