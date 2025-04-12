
import React from "react";

const ClearChatButton = ({ onClear }) => {
  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the chat?")) {
      localStorage.removeItem("chat_messages");
      onClear(); // Notify parent to update state
    }
  };

  return (
    <button
      onClick={handleClear}
      className="bg-orange-500 hover:bg-red-600 text-white font-small py-1 px-2 rounded shadow"
    >
      Clear Chat
    </button>
  );
};

export default ClearChatButton;
