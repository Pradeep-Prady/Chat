import React, { useEffect, useRef, useState } from "react";
import "./main.css";

import { Link } from "react-router-dom";
import Message from "../message/Message";
import { useDispatch, useSelector } from "react-redux";
import { getChats, sendMessage } from "../../actions/chatActions";

function Main() {
  const [text, setText] = useState("");
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const messageEndRef = useRef(null);
  const chatsRef = useRef(null);

  const dispatch = useDispatch();

  const { chats } = useSelector((state) => state.chatsState);
  const { isAuthenticated } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    dispatch(sendMessage(formData));
    setText("");
 
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView();
  };

  const handleScroll = () => {
    const element = chatsRef.current;
    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const isBottom = Math.abs(scrollHeight - scrollTop - clientHeight) <= 1;
      setIsScrolledToBottom(isBottom);
    }
  };

  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  useEffect(() => {
    scrollToBottom();
  }, [chats, isAuthenticated]);

  useEffect(() => {
    const element = chatsRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="main">
      {isAuthenticated ? (
        <>
          <div className="chat-container">
            <div className="chats" ref={chatsRef}>
              {chats &&
                chats.map((chat) => (
                  <Message
                    message={chat.text}
                    key={chat._id}
                    userId={chat.user}
                    name={chat.name}
                    avatar={chat.avatar}
                    createdAt={chat.createdAt}
                  />
                ))}{" "}
              <div ref={messageEndRef} />
            </div>

            {!isScrolledToBottom && (
              <div className="arrow-container" onClick={scrollToBottom}>
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            )}

            <form className="send-container" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="no-login">
            <div className="img-login">
              <img src="/images/nologin.gif" alt="nologin-img" />
            </div>
            <div className="content">
              <h3>Login to Access Chat</h3>

              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="credits">
        <p>Created by Pradeep M @ 2023</p>
      </div>
    </div>
  );
}

export default Main;
