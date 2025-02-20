import React from "react";
import { Crown } from "lucide-react";

const leaderboardData = [
  { id: 1, name: "Aaravi Sharma", points: 1800, img: "https://i.pravatar.cc/100?img=10" },
  { id: 2, name: "Ishaan Verma", points: 1700, img: "https://i.pravatar.cc/100?img=12" },
  { id: 3, name: "Aakash Nair", points: 1600, img: "https://i.pravatar.cc/100?img=13" },
  { id: 4, name: "Sakshi Gupta", points: 1500, img: "https://i.pravatar.cc/100?img=5" },
  { id: 5, name: "Sneha Iyer", points: 1400, img: "https://i.pravatar.cc/100?img=9" },
];

export const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 flex justify-center items-center rounded-xl">
      <div className="max-w-3xl w-full">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-indigo-300 text-center mb-8 tracking-wide drop-shadow-lg">
          🏆 Top Achievers
        </h2>

        {/* Leaderboard List */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-indigo-500/50">
          {leaderboardData.map((user, index) => {
            let bgColor = "bg-white/5"; // Default
            let glowEffect = "";
            if (index === 0) {
              bgColor = "bg-yellow-500/30";
              glowEffect = "animate-pulse shadow-[0_0_20px_rgba(255,215,0,0.6)]";
            }
            if (index === 1) {
              bgColor = "bg-gray-500/20";
              glowEffect = "shadow-[0_0_15px_rgba(192,192,192,0.5)]";
            }
            if (index === 2) {
              bgColor = "bg-orange-500/20";
              glowEffect = "shadow-[0_0_15px_rgba(255,140,0,0.5)]";
            }

            return (
              <div
                key={user.id}
                className={`flex items-center justify-between px-6 py-5 border-b border-gray-700 last:border-none transition-all duration-300 ${bgColor} ${glowEffect} hover:bg-white/15 hover:scale-[1.04]`}
              >
                {/* Left - Rank & Profile */}
                <div className="flex items-center space-x-4">
                  {index === 0 ? (
                    <Crown className="w-7 h-7 text-yellow-300 animate-bounce" />
                  ) : (
                    <span className="text-lg font-semibold text-gray-300">#{index + 1}</span>
                  )}
                  <img
                    src={user.img}
                    alt="Profile"
                    className="w-14 h-14 rounded-full border-2 border-indigo-400 shadow-md"
                  />
                  <span className="text-lg font-medium text-white">{user.name}</span>
                </div>

                {/* Right - Points */}
                <span className="text-lg font-bold text-indigo-300">{user.points} pts</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, rgba(79, 70, 229, 1), rgba(139, 92, 246, 1));
          }
        `}
      </style>
    </div>
  );
};
