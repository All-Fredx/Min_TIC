import { useState, useEffect } from "react";

function ChatAPI() {
  const [isOnline, setIsOnline] = useState(false);
  const [messages, setMessages] = useState([]);

  function connect() {
    // Simular la conexión al servidor...
    setIsOnline(true);
  }

  function receiveMessage(message) {
    // Simular la recepción de un mensaje del servidor...
    setMessages([...messages, message]);
  }

  function sendMessage(message) {
    // Simular el envío de un mensaje al servidor...
  }

  return {
    isOnline,
    messages,
    connect,
    receiveMessage,
    sendMessage,
  };
}

export default ChatAPI;
