import React, { useState } from "react";
import { Search, PlusCircle, CheckCircle, Code } from "lucide-react";

export const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPoll, setSelectedPoll] = useState(null);

  const trendingDiscussions = [
    { title: "Best ML Practices", replies: 120, likes: 300 },
    { title: "Blockchain Scalability", replies: 95, likes: 240 },
    { title: "Optimizing React Apps", replies: 80, likes: 200 },
  ];

  const contributors = [
    { name: "Anshu", profilePic: "https://randomuser.me/api/portraits/men/1.jpg", posts: 25 },
    { name: "Hari", profilePic: "https://randomuser.me/api/portraits/men/2.jpg", posts: 50 },
    { name: "Gops", profilePic: "https://randomuser.me/api/portraits/men/3.jpg", posts: 29 },
  ];

  const dailyPoll = {
    question: "Which programming language do you prefer for AI?",
    options: ["Python", "JavaScript", "Rust", "Go"],
  };

  const dailyChallenge = {
    title: "Reverse a Linked List",
    difficulty: "Medium",
  };

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-12 rounded-xl">
      {/* Search & CTA Section */}
      <div className="relative flex flex-col items-center justify-center mb-12">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            className="w-full px-12 py-3 text-lg bg-gray-800 bg-opacity-80 rounded-full border border-gray-600 focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none shadow-lg backdrop-blur-lg text-white"
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-3 text-gray-400" />
        </div>
        <button className="mt-5 flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105">
          <PlusCircle className="mr-2" /> Start Discussion
        </button>
      </div>

      {/* Main Content - Trending & Contributors */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* 🔥 Trending Discussions */}
        <div className="p-6 rounded-2xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl border border-gray-600 hover:border-indigo-500 transition-all">
          <h2 className="text-2xl font-bold text-indigo-400 mb-6">🔥 Trending Discussions</h2>
          <div className="space-y-6">
            {trendingDiscussions.map((post, index) => (
              <div
                key={index}
                className="p-5 bg-gray-900 bg-opacity-80 border border-gray-700 rounded-xl shadow-md transition-all hover:scale-105 hover:shadow-indigo-500/50"
              >
                <h3 className="text-lg font-semibold text-gray-100">{post.title}</h3>
                <p className="text-gray-400">{post.replies} replies • {post.likes} likes</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Contributors */}
        <div className="p-6 rounded-2xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl border border-gray-600 hover:border-indigo-500 transition-all">
          <h2 className="text-2xl font-bold text-indigo-400 mb-6">🏆 Popular Contributors</h2>
          <div className="space-y-6">
            {contributors.map((user, index) => (
              <div
                key={index}
                className="flex items-center p-5 bg-gray-900 bg-opacity-80 border border-gray-700 rounded-xl shadow-md transition-all hover:scale-105 hover:shadow-indigo-500/50"
              >
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-14 h-14 rounded-full border-2 border-indigo-400 shadow-md"
                />
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-gray-100">{user.name}</h3>
                  <p className="text-gray-400">{user.posts} Posts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Poll & Challenge */}
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {/* 📊 Daily Poll */}
        <div className="p-6 rounded-2xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl border border-gray-600 hover:border-indigo-500 transition-all">
          <h2 className="text-2xl font-bold text-indigo-400 mb-6">📊 Daily Poll</h2>
          <p className="text-lg text-gray-100 mb-4">{dailyPoll.question}</p>
          {dailyPoll.options.map((option, index) => (
            <label key={index} className="block cursor-pointer text-gray-300 text-lg mb-2">
              <input
                type="radio"
                name="poll"
                value={option}
                className="mr-2"
                onChange={() => setSelectedPoll(option)}
              />
              {option}
            </label>
          ))}
          {selectedPoll && <p className="text-green-400 mt-4">✔️ Voted: {selectedPoll}</p>}
        </div>

        {/* Daily Coding Challenge */}
        <div className="p-6 rounded-2xl bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl border border-gray-600 hover:border-indigo-500 transition-all">
          <h2 className="text-2xl font-bold text-indigo-400 mb-6">🏆 Daily Coding Challenge</h2>
          <p className="text-lg text-gray-100 mb-2">{dailyChallenge.title}</p>
          <p className="text-gray-400">Difficulty: {dailyChallenge.difficulty}</p>
          <button className="mt-4 flex items-center px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition-all hover:scale-105">
            <Code className="mr-2" /> Attempt Challenge
          </button>
        </div>
      </div>
    </div>
  );
};
