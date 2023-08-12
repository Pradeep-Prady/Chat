import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAdminReviews } from "./../../actions/reviewActions";
import ReviewCard from "./ReviewCard";
import AdminBar from "./AdminBar";
import MetaData from "../layouts/MetaData";
import { toast } from "react-hot-toast";
import Loader from "../layouts/Loader";

export default function Reviews() {
  const { adminReviews, error, loading } = useSelector(
    (state) => state.reviewsState
  );

  const [category, setCategory] = useState("visible");

  
  const dispatch = useDispatch();

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
    }

    dispatch(getAdminReviews(category));
  }, [dispatch, error, category]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <MetaData title={"Reviews"} />
          <div className="w-full h-screen ">
            <div className="w-full h-full bg-slate-500">
              <div className="w-full bg-stone-900 p-2 flex items-center justify-between">
                <select
                  className="bg-stone-950 outline-none text-white p-1 rounded-sm "
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option value="all">All</option>
                  <option value="visible">Visible</option>
                  <option value="nonvisible">Non Visible</option>
                </select>
                <p className="text-white ">
                  Reviews Count : {adminReviews?.length}
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {adminReviews && adminReviews?.length > 0 ? (
                    adminReviews?.map((review) => (
                      <ReviewCard key={review._id} review={review} />
                    ))
                  ) : (
                    <div className=" w-full">
                      {" "}
                      <h2 className="text-center text-xl font-light text-stone-900 pt-5">
                        No reviews to display
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <AdminBar />
          </div>
        </>
      )}
    </>
  );
}
