import React from "react";
import { Link } from 'react-router-dom';

export default function AdminBar() {
  return (
    <div className=" bg-black w-full bottom-0 right-0 fixed flex items-start justify-evenly p-3 md:p-5">
      <Link
        to="/admin/reviews"
        className="text-white flex items-start justify-center text-xl"
      >
        <i className="fa-solid fa-pen-to-square"></i>
        {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg> */}
      </Link>

      <Link
        // to="/admin/posts"
        className="text-white flex items-start justify-center text-xl"
      >
        <i className="fa-solid fa-plus"></i>
      </Link>

      <Link
        to="/admin/dashboard"
        className="text-black bg-white py-1.5 px-2 rounded-lg flex items-start justify-center"
      >
        {/* <i className="fa-solid fa-plus"></i> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>

      <Link
        to="/admin/userimages"
        className="text-white flex items-start justify-center text-xl"
      >
        <i className="fa-solid fa-image-portrait"></i>
      </Link>
      <Link
        to="/admin/gang"
        className="text-white flex items-start justify-center text-xl"
      >
        <i className="fa-solid fa-arrow-right-from-bracket "></i>
      </Link>
    </div>
  );
}
