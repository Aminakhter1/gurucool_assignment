
import React from "react";

const LoginForm = ({ username, setUsername, handleLogin }) => (
  <div className="h-screen flex items-center justify-center bg-gray-100">
    <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
      <h2 className="text-xl mb-4 text-center font-bold">Enter Username</h2>
      <input
        className="border px-3 py-2 w-full mb-3 rounded"
        placeholder="e.g. user1"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 w-full rounded"
        disabled={username.trim().length < 2} 
      >
        Join Chat
      </button>
    </form>
  </div>
);

export default LoginForm;