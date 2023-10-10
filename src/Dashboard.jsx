import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
import { database } from "./firebase";
import { push, ref, onValue } from "firebase/database";

const chatRef = ref(database, "Chat");

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function Dashboard({ user }) {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const handleSendMessage = (e) => {
    if ((e.key === "Enter" || e.type === "click") && inputText.trim() !== "") {
      const userColor = getRandomColor();
      // Push a new message to the "Chat" reference
      push(chatRef, {
        text: inputText,
        timestamp: Date.now(),
        sender: "Aanchal",
        backgroundColor: userColor, // Store the user's color with the message
      }).then(() => {
        setInputText(""); // Clear the input field after sending a message
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object of messages into an array
        const messageArray = Object.values(data);
        setMessages(messageArray);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="home-container">
      <div id="a1">
        <img class="img1" src="pro.jpg" alt="" />
        <div id="a2">
          <button className="chat-logout" onClick={logout}>
            <Link
              to="/"
              class="logou"
              style={{ color: "white", textDecoration: "none" }}
            >
              Logout
            </Link>
          </button>
          <div className="chat-box" id="chatBox">
            {messages.map((message, index) => (
              <div
                key={index}
                className="message-box"
                style={{
                  backgroundColor: message.backgroundColor,
                  alignSelf:
                    message.sender === user ? "flex-end" : "flex-start",
                }}
              >
                {message.text}{" "}
                <div className="timestamp">
                  {formatTimestamp(message.timestamp)}
                </div>
              </div>
            ))}
          </div>
          <input
            type="text"
            className="input-box"
            id="messageInput"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} // Update inputText when input changes
            onKeyDown={handleSendMessage}
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
