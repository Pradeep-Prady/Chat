import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createGangImage,
  createUserGangImage,
} from "../../actions/gangImageActions";
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearGangImageCreated } from "../../slices/gangImageSlice";
import MetaData from "./../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function GangImageUpload() {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(
    "/images/default_avatar.png"
  );

  const { isUserGangImageCreated, loading, error } = useSelector(
    (state) => state.gangImageState
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
        setImage(e.target.files[0]);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", image);

    dispatch(createUserGangImage(formData));
  };

  useEffect(() => {
    if (isUserGangImageCreated) {
      toast.success("Image Uploaded Successfully", {
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
      dispatch(clearGangImageCreated());
      setImage("");
      setImagePreview("/images/default_avatar.png");
      return;
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
      clearError();

      return;
    }
  }, [isUserGangImageCreated, error, dispatch, navigate]);

  return (
    <>
      <MetaData title={"Upload"} />

      <div
        className="relative z-10 w-full h-screen flex items-center justify-center text-white  bg-stone-800"
        id="login"
      >
        <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-7 px-5">
          <form className="text-center" onSubmit={submitHandler}>
            <h2 className="text-3xl ">Gang Image</h2>

            <div className="my-2 flex items-center justify-center">
              <div className="flex w-[200px] h-[200px] overflow-hidden rounded-lg">
                <img
                  src={imagePreview}
                  className="w-full h-full"
                  alt="avtar-preview"
                />
              </div>
            </div>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Image</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                  type="file"
                  name="avatar"
                  onChange={onImageChange}
                />
              </div>
            </div>

            <div className="my-5">
              <button
                type="submit"
                // disabled={loading}
                className="button-54 scale-75"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
