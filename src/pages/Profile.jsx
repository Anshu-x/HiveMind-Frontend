import React from "react";
import { Mail, MessageSquare, Star, Award, Calendar } from "lucide-react";

export const Profile = () => {
  const user = {
    name: "Anshu",
    email: "anshux000@gmail.com",
    avatar:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/pm-modi-smiling-064650298-1x1.jpeg?VersionId=9w2sDdTPC74oi3qxdo8II4Sco1dvH1NT",
    joinDate: "January 2025",
    posts: 23,
    threads: 12,
    reputation: 1250,
    achievements: 8,
    bio: "Passionate Machine Learning Engineer and AI Enthusiast.",
  };

  const stats = [
    { icon: MessageSquare, label: "Total Posts", value: user.posts },
    { icon: Star, label: "Reputation", value: user.reputation },
    { icon: Award, label: "Achievements", value: user.achievements },
    { icon: Calendar, label: "Threads Created", value: user.threads },
  ];

  const recentActivity = [
    {
      title: "How to fine-tune a Llama 2 model on custom data?",
      timestamp: "2 hours ago",
      replies: 5,
    },
    {
      title: "Best practices for optimizing MongoDB queries?",
      timestamp: "1 day ago",
      replies: 8,
    },
    {
      title: "Understanding Transformer architectures in NLP",
      timestamp: "3 days ago",
      replies: 12,
    },
  ];

  return (
    <div className="max-w-5xl mt-16 mx-auto px-6 sm:px-8 py-10">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl p-10 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-indigo-500/20 blur-[100px]" />

        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6 text-center md:text-left relative z-10">
          {/* Profile Image */}
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
          />
          <div className="mt-6 md:mt-0">
            <h1 className="text-4xl font-bold text-white">{user.name}</h1>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 mt-2">
              <Mail className="w-5 h-5" />
              <span>{user.email}</span>
            </div>
            <p className="text-gray-400 mt-1">Joined {user.joinDate}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-md flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <div className="p-3 bg-indigo-600/30 rounded-full">
                <stat.icon className="w-7 h-7 text-indigo-300" />
              </div>
              <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
              <p className="text-lg font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-white mb-4">About</h2>
          <p className="text-gray-300 bg-white/10 backdrop-blur-md p-4 rounded-lg">
            {user.bio}
          </p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-5">Recent Activity</h2>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg divide-y divide-gray-700">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="p-6 flex items-center justify-between transition cursor-pointer hover:bg-white/10 hover:scale-105"
            >
              <div>
                <h3 className="text-lg font-medium text-white">{activity.title}</h3>
                <p className="text-sm text-gray-400">{activity.timestamp}</p>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">{activity.replies}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
