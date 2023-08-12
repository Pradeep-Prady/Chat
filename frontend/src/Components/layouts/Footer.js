import React from "react";
import logo from "../../assets/images/logo512.png";

export default function Footer() {
  return (
    <footer className="bg-stone-900 w-full text-center text-white py-10 border-t-2">
      <div className="flex flex-col items-center justify-center">
        <img className="w-[50px]" src={logo} alt="logo" />

        <h2 className="text-3xl">Narikootam</h2>

        <div className="my-5">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Narikootam. All rights reserved.
          </p>
        </div>

        <div className="text-stone-500">
          <p className="text-xs">Developer: Pradeep M</p>
        </div>
      </div>
    </footer>
  );
}
