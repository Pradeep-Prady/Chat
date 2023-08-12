import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { deleteGangImage, getGangImages } from "../../actions/gangImageActions";
import ImageCard from "../layouts/Gang/ImageCard";
import AdminBar from "./AdminBar";
import MetaData from "./../layouts/MetaData";
import { toast } from "react-hot-toast";
import Loader from "../layouts/Loader";
import { clearGangImageDeleted } from "../../slices/gangImageSlice";

export default function AdminGangImages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { gangImages, loading, isGangImageDeleted, error } = useSelector(
    (state) => state.gangImagesState
  );

  const gotoDetails = (e, id) => {
    navigate(`/admin/gang/${id}`);
  };

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

    dispatch(getGangImages());
  }, [dispatch, error, isGangImageDeleted]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <MetaData title={"Gang Images"} />
          <div className="w-full h-auto  ">
            <div className="w-full h-auto flex justify-between items-center bg-stone-950 p-4   text-white">
              <div>
                <Link to="/admin/gang/upload">
                  {" "}
                  <button className="py-1 px-2 bg-stone-800 rounded-sm">
                    Upload Image
                  </button>
                </Link>
              </div>
              <p>Images Count {gangImages?.length}</p>
            </div>
            <div>
              {/* <div className="flex justify-evenly items-center mt-3">
          <button className="bg-stone-950 text-white text-sm py-2 px-4 rounded-md">
            User Uploads
          </button>
          <button className="bg-stone-950 text-white text-sm py-2 px-4 rounded-md">
            Gang images
          </button>
        </div> */}
              <div className="w-full h-auto bg-black">
                <div className="gallery">
                  {gangImages && gangImages?.length > 0 ? (
                    gangImages.map((image) => (
                      <div
                        className="pics"
                        key={image._id}
                        onClick={(e) => gotoDetails(e, image._id)}
                      >
                        <img src={image.image} alt="gangimages" />
                      </div>
                    ))
                  ) : (
                    <>No Images to display</>
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
