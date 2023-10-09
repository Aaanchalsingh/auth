import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // Replace with your server's address

function Dashboard() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    socket.on("chat message", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.off("chat message");
    };
  }, [messages]);

  const handleSendMessage = (e) => {
    if (inputText.trim() !== "") {
      socket.emit("chat message", {
        text: inputText,
        sender: "Arya",
      });
    }

    if (e.key === "Enter" || e.type === "click") {
      const messageInput = document.getElementById("messageInput");
      const message = messageInput.value;
      if (message.trim() !== "") {
        setMessages([...messages, { text: message, sender: "Arya" }]);
        messageInput.value = "";
      }
      setInputText("");
    }
  };
  return (
    <div className="home-container">
      <div id="a1">
        <img
          src="pro.jpg"
          alt=""
          style={{
            height: "20vh",
            width: "10vw",
            borderRadius: "100%",
            position: "fixed",
            top: "3%",
            left: "3%",
          }}
        />
        <div id="a2">
          <button className="chat-logout" onClick={logout}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Logout
            </Link>
          </button>
          <div className="chat-box" id="chatBox">
            {messages.map((message, index) => (
              <div key={index} className="message-box">
                {message.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            className="input-box"
            id="messageInput"
            placeholder="Type a message..."
            onKeyDown={handleSendMessage}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="chat-input" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
