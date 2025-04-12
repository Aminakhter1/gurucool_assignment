
import React from "react";

const ChatInput = ({ text, setText, handleSend }) => (
  <div className="flex items-center p-3 border-t border-gray-200 bg-white">
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSend()}
      className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      placeholder="Type a message..."
    />
    <button
      onClick={handleSend}
      className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
    >
      Send
    </button>
  </div>
);

export default ChatInput;
