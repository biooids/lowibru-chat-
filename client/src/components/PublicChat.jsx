import React, { useEffect, useState } from "react";
import { useSocket } from "../context/SocketContext.jsx";
import { MessageContainer } from "./MessageContainer.jsx";

const PublicChat = () => {
  const [messages, setMessages] = useState([]);
  const { socket } = useSocket();

  useEffect(() => {
    // Fetch public messages
    const fetchPublicMessages = async () => {
      const res = await fetch("/api/messages/public");
      const data = await res.json();
      setMessages(data);
    };

    fetchPublicMessages();

    // Listen for new public messages
    socket.on("newPublicMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("newPublicMessage");
  }, [socket]);

  return <MessageContainer messages={messages} />;
};

export default PublicChat;
