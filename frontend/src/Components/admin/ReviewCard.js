import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewCard({ review }) {
  var createdAt = String(review.createdAt);
  var date = new Date(createdAt);
  const navigate = useNavigate();
  const id = review._id;

  var optionsDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  var formattedDate = date.toLocaleDateString("en-GB", optionsDate);

  var optionsTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  var formattedTime = date.toLocaleTimeString("en-GB", optionsTime);

  const gotoDetail = () => {
    navigate(`/admin/review/${id}`);
  };

  return (
    <div onClick={gotoDetail} className="bg-stone-900 m-2  rounded-sm p-2 px-4">
      <div className="flex items-center justify-between text-stone-500">
        <img
          src={review?.user?.avatar}
          alt="user-avatar"
          className="w-[50px] h-[50px] rounded-md"
        />
        <p className="text-sm">{review.user.name}</p>
      </div>
      <div className="text-white py-2">
        <p>{review.message}</p>
      </div>

      <p className="text-sm font-bold my-2">
        Review Status :{" "}
        <span
          className={` ${
            review.status === "true" ? "text-white" : "text-red-500"
          }`}
        >
          {review.status}
        </span>
      </p>

      <div className="flex justify-between items-center text-xs text-stone-500">
        <p>{formattedTime}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}
