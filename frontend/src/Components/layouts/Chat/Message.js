import React from "react";
import img from "../../../assets/images/default_avatar.png";
import { useSelector } from "react-redux";
const moment = require("moment");

export default function Message({ chat }) {
  const { user } = useSelector((state) => state.authState);

  var createdAt = String(chat.createdAt);

  const time = moment(createdAt).local().format("h:mm A");
  const date = moment(createdAt).local().format("DD-MMM-YYYY");

  return (
    <>
      <div
        className={`w-full my-2 text-white   overflow-hidden ${
          chat?.user?._id !== user?._id
            ? "flex justify-start"
            : "flex justify-end"
        }`}
      >
        {chat?.user._id !== user._id ? (
          <>
            <div className="flex w-10/12 p-2 mglass rounded-md">
              <div className="w-3/12 md:w-2/12 flex items-start justify-center">
                <img
                  src={chat?.user?.avatar ? chat?.user?.avatar : img}
                  alt="Message-User"
                  className="rounded-3xl w-[40px] h-[40px]"
                />
              </div>
              <div className="w-10/12 ml-1">
                <div>
                  <span className="text-xs text-stone-500">
                    {chat?.user?.name}
                  </span>
                </div>
                <div className="text-black">
                  <p className="text-sm">{chat?.text}</p>
                </div>

                <div className="text-stone-500 w-full flex justify-between">
                  <span className="text-xs ">{time}</span>
                  <span className="text-xs ">{date}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-10/12 p-2 mglass  rounded-md">
              <div className="w-9/12 md:10/12  ">
                <div className="w-full text-end">
                  <span className="text-xs text-stone-500 ">
                    {chat?.user?.name}{" "}
                  </span>
                </div>
                <div className="w-full md:10/12 text-end text-black">
                  <p className="text-sm">{chat?.text}</p>
                </div>

                <div className="text-stone-500 w-full flex justify-between">
                  <span className="text-xs ">{time}</span>
                  <span className="text-xs ">{date}</span>
                </div>
              </div>

              <div className="w-3/12 md:w-2/12 flex items-start justify-center">
                <img
                  src={chat?.user?.avatar ? chat?.user?.avatar : img}
                  alt="Message-User"
                  className="rounded-3xl w-[40px] h-[40px]"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
