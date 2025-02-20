import React, { useState, useEffect, useRef } from "react";
import { Bot, Send, Loader2 } from "lucide-react";

export const AiChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today? 😊", isBot: true },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message inside chat container
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateBotResponse = (userMessage) => {
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hi there! How can I help you today?";
    } else if (userMessage.toLowerCase().includes("help")) {
      return "Sure! What do you need assistance with?";
    } else if (userMessage.toLowerCase().includes("react")) {
      return "React is a JavaScript library for building user interfaces. Do you want to learn more?";
    } else {
      return "I'm still learning! But I'm here to assist you. 🚀";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { id: Date.now(), text: message, isBot: false }]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI response after 1.5 seconds
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: generateBotResponse(message),
          isBot: true,
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950 px-6 py-10 pt-20 overflow-hidden ">
      {/* Header */}
      <div className="flex items-center mb-8 mt-10">
        <Bot className="w-8 h-8 text-indigo-400 animate-pulse mr-3" />
        <h1 className="text-4xl font-extrabold text-white">AI Chat Assistant</h1>
      </div>

      {/* Chat Box */}
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-gray-700 shadow-lg rounded-2xl p-6 flex flex-col h-[600px]">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto chat-custom-scrollbar" style={{ maxHeight: "500px" }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 flex ${msg.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[75%] p-4 rounded-xl transition-all shadow-md ${
                  msg.isBot
                    ? "bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700 shadow-md"
                    : "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white shadow-[0_0_15px_rgba(99,102,241,0.7)]"
                }`}
              >
                <p className={msg.isBot ? "text-gray-900 dark:text-white" : "text-white"}>
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>AI is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none shadow-md"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white px-5 py-3 rounded-xl shadow-lg 
              hover:bg-indigo-600 transition-transform transform hover:scale-110
              hover:shadow-[0_0_10px_rgba(139,92,246,0.8)] flex items-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Custom Scrollbar Styling */}
      <style>
        {`
          .chat-custom-scrollbar {
            overflow-y: auto;
            max-height: 100%;
          }
          .chat-custom-scrollbar::-webkit-scrollbar {
            width: 5px;
          }
          .chat-custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .chat-custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, rgba(79, 70, 229, 0.8), rgba(99, 102, 241, 0.8));
            border-radius: 10px;
            transition: background 0.3s ease-in-out;
          }
          .chat-custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, rgba(79, 70, 229, 1), rgba(99, 102, 241, 1));
          }
        `}
      </style>
    </div>
  );
};