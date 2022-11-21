import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";

import profile from "../profile.jpg";
import "./chatUi.css";

const ChatUi = () => {
  return (
    <div className="chat-container">
      <div className="search-container">
        <div className="search-box">
          <BsSearch size={22} />
          <input placeholder="search " />
        </div>
      </div>
      <div className="conversetion-list">
        {[1, 23, 4, 5, 5, 6, 4, 5, 6, 6].map((item) => (
          <div className="conversetion">
            <img src={profile} alt="logo" />

            <div className="title-text">
              <p>hifzur khan </p>
            </div>
            <div className="created-date">
              <p>apr 19</p>
            </div>
            <div className="conversation-message">
              <p>this is message check it out</p>
            </div>
          </div>
        ))}
      </div>
      <div className="new-message-cntainer">
        <a href="#">+</a>
      </div>
      <div className="chat-title">
        <span> faizan khan </span>
        <AiFillDelete className="delete-icon" />
      </div>
      <div className="chat-mesage-list">
        {[1, 23, 4, 5, 5, 6, 4, 5, 6, 6].map((item) => (
          <>
            <div className="message-row you-message">
              <div className="message-content">
                <div className="message-text ">ok then</div>
                <div className="message-time">apr 19</div>
              </div>
            </div>

            <div className="message-row other-message">
              <div className="message-content">
                <img src={profile} alt="logo" />
                <div className="message-text">
                  yeah i think this is best do it .yeah i think this is best do
                  it .
                </div>
                <div className="message-time">apr 19</div>
              </div>
            </div>
          </>
        ))}

        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text ">ok then</div>
            <div className="message-time">apr 19</div>
          </div>
        </div>

        <div className="message-row other-message">
          <div className="message-content">
            <img src={profile} alt="logo" />
            <div className="message-text">
              yeah i think this is best do it .yeah i think this is best do it .
            </div>
            <div className="message-time">apr 19</div>
          </div>
        </div>
      </div>
      <div className="chat-form">
        <GrAttachment size={30} />
        <input placeholder="type a message..." />
      </div>
    </div>
  );
};

export default ChatUi;
