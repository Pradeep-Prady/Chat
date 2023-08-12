import React from "react";
import "./message.css";
import { useSelector } from "react-redux";

function Message(props) {
  const { user } = useSelector((state) => state.authState);

  var createdAt = String(props.createdAt);
  var date = new Date(createdAt);

  // var optionsDate = {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // };

  // var formattedDate = date.toLocaleDateString("en-GB", optionsDate);

  var optionsTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  var formattedTime = date.toLocaleTimeString("en-GB", optionsTime);

  return (
    <div
      className={
        props.userId !== user._id ? `message-design` : "message-user-design"
      }
    >
      {props.userId !== user._id ? (
        <div className="message">
          <div className="img-container">
            <img src={props.avatar ?? "/images/default_avatar.png"} alt="img" />
          </div>

          <div className="content">
            <p className="text">{props.message}</p>
            <div className="timec">
              {" "}
              <p className="name">{props.name}</p>
              <p className="time">{formattedTime}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="message-user ">
          <div className="content">
            <p className="text">{props.message}</p>
            <div className="timec">
              {" "}
              <p className="time">{formattedTime}</p>
              <p className="name">{props.name}</p>
            </div>
          </div>
          <div className="img-container">
            <img src={props.avatar ?? "/images/default_avatar.png"} alt="img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
