import React from "react";

const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="bg-orange-400 hover:bg-red-500 text-white px-2 py-1 rounded ml-4"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
