import React from "react";
import img from "../../assets/images/logo.png";

export default function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img
        className="w-[50px] h-[50px] rounded-3xl rotate-infinite"
        src={img}
        alt="loader-img"
      />
    </div>
  );
}
