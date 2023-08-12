import React from "react";
import img from "../../../assets/images/default_avatar.png";
import { motion } from "framer-motion";

export default function ReviewCard({ review }) {
  var createdAt = String(review.createdAt);
  var date = new Date(createdAt);

  var optionsDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  var formattedDate = date.toLocaleDateString("en-GB", optionsDate);

  return (
    <motion.div
  
    >
      <div className=" flex-none carousel-item w-[250px] p-5 mx-3  review-card rounded-sm">
        <div className="flex justify-between my-2">
          <div>
            <img
              src={review.user?.avatar ? review?.user?.avatar : img}
              alt="useravatar"
              className="w-[50px] h-[50px] rounded-md"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold ">{review?.user?.name}</h3>
          </div>
        </div>
        <p className="text-black ">{review.message}</p>
        <div className="flex justify-between mt-4">
          <p className="text-sm font-semibold">12.57</p>
          <p className="text-sm font-semibold">{formattedDate}</p>
        </div>
      </div>
    </motion.div>
  );
}
