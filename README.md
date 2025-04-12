# gurucool_assignment
# 🗨️ Local Storage Chat App

A simple, lightweight React chat application that stores messages in the browser's `localStorage`. It supports basic authentication (via username input), message syncing across tabs, and session persistence without a backend.

---

##  Features

-  Chat with yourself (or others on the same machine/browser)
-  Messages stored in `localStorage`
-  Real-time sync across multiple browser tabs
-  Clear chat history
- Log in and log out functionality
- Responsive design with Tailwind CSS

---

##  Tech Stack

- React
- Tailwind CSS
- LocalStorage (for persistent data)
- JavaScript (ES6+)

---

## Getting start

### 1. Clone the repo

```bash
git clone https://github.com/your-username/local-chat-app.git
cd local-chat-app
### Install Dependencies
npm install

### start the App

npm start

##project Structure
src/
│
├── components/
│   ├── ChatInput.js        // Text input and send button
│   ├── ChatMessage.js      // Renders each chat message
│   ├── ClearChatButton.js  // Clears localStorage
│   ├── LoginForm.js        // Simple login form
│   └── LogoutButton.js     // Logs the user out
│
├── App.js                  // Main component handling logic
└── index.js

deploylink:https://chatapp-l1a1.vercel.app/

------Thanks----

