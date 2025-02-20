import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, PlusCircle } from "lucide-react";

const threads = [
  { id: "1", title: "Future of AI in Indian Startups", author: "Rohan Verma", createdAt: "2 hours ago", replies: 5 },
  { id: "2", title: "Scaling Startups with AI-driven Automation", author: "Aditi Nair", createdAt: "1 day ago", replies: 8 },
  { id: "3", title: "How AI is Revolutionizing EdTech in India?", author: "Arjun Mehta", createdAt: "3 days ago", replies: 12 },
  { id: "4", title: "Best Coding Practices for Indian Developers", author: "Neha Kapoor", createdAt: "5 days ago", replies: 7 },
  { id: "5", title: "The Role of AI in India’s Financial Sector", author: "Vikram Rao", createdAt: "1 week ago", replies: 15 },
];

export const Discussions = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-12 rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-indigo-400">💬 Discussion Threads</h1>
        <Link to="/new-thread" className="flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
          <PlusCircle className="mr-2" /> New Thread
        </Link>
      </div>

      {/* Threads List */}
      <div className="space-y-6">
        {threads.length > 0 ? (
          threads.map((thread) => (
            <Link
              key={thread.id}
              to={`/thread/${thread.id}`}
              className="block p-6 rounded-2xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl border border-gray-600 hover:border-indigo-500 transition-all hover:scale-105 hover:shadow-indigo-500/50"
            >
              <h2 className="text-xl font-semibold text-gray-100 mb-2">{thread.title}</h2>
              <p className="text-sm text-gray-400">Posted by <span className="text-gray-300">{thread.author}</span> • {thread.createdAt}</p>
              <div className="flex items-center mt-3 text-gray-400">
                <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" /> {thread.replies} Replies
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-400 py-16 bg-gray-800 bg-opacity-90 border border-gray-600 rounded-xl shadow-lg">
            <p className="text-lg">No discussions yet. Start a new one!</p>
          </div>
        )}
      </div>
    </div>
  );
};