import React, { useEffect, useState } from "react";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import LoginForm from "./components/LoginForm";
import ClearChatButton from "./components/ClearChatButton";
import LogoutButton from "./components/LogoutButton";

const LOCAL_KEY = "chat_messages";

const App = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState(() => {
    const data = localStorage.getItem(LOCAL_KEY);
    return data ? JSON.parse(data) : [];
  });
  const [text, setText] = useState("");

  // Listen to localStorage updates (sync across tabs)
  useEffect(() => {
    const onStorage = () => {
      const updated = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
      setMessages(updated);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    const chatContainer = document.querySelector(".flex-1");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!text.trim()) return;
    const msg = {
      id: Date.now(),
      user: username,
      text,
      time: new Date().toLocaleTimeString(),
    };
    const updated = [...messages, msg];
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
    setMessages(updated);
    setText("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const trimmed = username.trim();
    if (trimmed.length >= 2) {
      setUsername(trimmed);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <LoginForm
        username={username}
        setUsername={setUsername}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-indigo-50 to-white">
      <header className="bg-indigo-600 text-white px-4 py-3 text-lg font-semibold shadow flex justify-between items-center">
        <span>Logged in as: {username}</span>
        <div className="flex items-center gap-2">
          <ClearChatButton onClear={() => {
            localStorage.removeItem(LOCAL_KEY);
            setMessages([]);
          }} />
          <LogoutButton onLogout={handleLogout} />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-6 md:px-10 space-y-2">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} msg={msg} currentUser={username} />
        ))}
      </div>

      <ChatInput text={text} setText={setText} handleSend={handleSend} />
    </div>
  );
};

export default App;
