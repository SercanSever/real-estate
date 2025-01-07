import React, { useContext, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/auth-context.js";
import apiRequest from "../../lib/api-request.js";
import { format } from "timeago.js";

function Chat({ chats }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleOpenChat = async (id, receiver) => {
    const res = await apiRequest("/chat/" + id);
    setChat({ ...res.data, receiver });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    if (!text) return;
    try {
      const res = await apiRequest.post("/message/" + chat.id, {
        text,
      });
      setChat((prev) => ({ ...prev, Messages: [...prev.Messages, res.data] }));
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats &&
          chats.map((chat) => (
            <div
              className="message"
              key={chat.id}
              style={{
                backgroundColor: chat.seenBy.includes(currentUser.id)
                  ? "white"
                  : "#fecd514e",
              }}
              onClick={() => handleOpenChat(chat.id, chat.receiver)}
            >
              {chat.receiver && (
                <img src={chat.receiver.avatar || "/noavatar.jpg"} alt="" />
              )}
              {chat.receiver && <span>{chat.receiver.username}</span>}
              <p>{chat.lastMessage} </p>
            </div>
          ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "/noavatar.jpg"} alt="" />
              <span>{chat.receiver.username}</span>
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.Messages.map((message) => (
              <div
                className="chatMessage"
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left",
                }}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>
          <form className="bottom" onSubmit={handleSubmit}>
            <textarea name="text" id="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
