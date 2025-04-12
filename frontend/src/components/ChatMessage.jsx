
import React from "react";

const ChatMessage = ({ msg, currentUser }) => {
  const isOwn = msg.user === currentUser;
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-xl shadow text-sm max-w-xs break-words ${
          isOwn ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <p>{msg.text}</p>
        <div className="text-[10px] mt-1 opacity-70 text-right">
          {!isOwn && <span className="mr-1 font-semibold">{msg.user}</span>}
          {msg.time}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
