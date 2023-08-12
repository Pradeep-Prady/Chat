import React from "react";
import { Link } from "react-router-dom";

export default function ImageCard({ gangImage }) {
  const handleDownload = async () => {
    try {
      // Ensure the image URL uses HTTPS
      const secureImageUrl = gangImage?.image.replace("http://", "https://");

      const response = await fetch(secureImageUrl); // Fetch the image
      const blob = await response.blob(); // Get the image data as a Blob

      const url = URL.createObjectURL(blob); // Create a temporary URL for the Blob

      const link = document.createElement("a");
      link.href = url;
      link.download = "narikootam-image.jpg"; // Set the default download filename
      link.click();

      // Clean up the temporary URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="relative  w-full h-screen  flex items-center justify-center rounded-md z-10 ">
      <div className="w-full glass h-4/5 overflow-hidden sm:w-10/12 md:w-8/12 flex items-center justify-center ">
        <img
          className="w-full h-auto sm:h-full sm:w-auto rounded-xl  p-2"
          key={gangImage?._id}
          src={gangImage?.image}
          alt="GangImages"
        />
      </div>

      <div className="w-full  h-[50px] text-xl glass absolute bottom-0 left-0 z-50 flex items-center justify-evenly">
        <Link
          to={`/gang/image/${gangImage?._id}`}
          className="flex items-center justify-center "
        >
          <span className="pr-1">{gangImage.numOfComments} </span>
          <i className="fa-solid fa-comment"></i>
        </Link>
        <Link to={`/`} className="flex items-center justify-center">
          <i className="fa-solid fa-house"></i>
        </Link>
        <p
          className="flex items-center justify-center cursor-pointer"
          onClick={handleDownload}
        >
          <i className="fa-solid fa-download"></i>
        </p>
      </div>
    </div>
  );
}
