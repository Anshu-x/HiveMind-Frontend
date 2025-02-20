import React from 'react';
import { Bell, Award, X } from 'lucide-react';

export const Sidebar = ({ isVisible, onClose }) => {
  const badges = [
    { name: 'Top Contributor', description: 'Created 100+ valuable posts', icon: '🏆' },
    { name: 'Active User', description: 'Logged in for 30 consecutive days', icon: '⭐' },
    { name: 'Problem Solver', description: 'Helped resolve 50+ discussions', icon: '💡' },
    { name: 'Early Adopter', description: 'Joined during beta phase', icon: '🚀' },
  ];

  const updates = [
    { id: 1, text: 'New feature released: AI Chat Integration', time: '2h ago' },
    { id: 2, text: 'Community milestone: 10,000 members!', time: '5h ago' },
    { id: 3, text: 'Upcoming maintenance scheduled', time: '1d ago' },
    { id: 4, text: 'Bug fixes and performance improvements', time: '2d ago' },
    { id: 5, text: 'New moderator guidelines added', time: '3d ago' },
    { id: 6, text: 'Feature request voting system launched', time: '4d ago' },
    { id: 7, text: 'Dark mode improvements', time: '5d ago' },
    { id: 8, text: 'Live Q&A session scheduled', time: '6d ago' },
  ];

  return (
    <>
      {/* Smooth Blurred Background */}
      {isVisible && (
        <div
          className="fixed inset-0 backdrop-blur-lg bg-black/30 transition-opacity z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full max-w-[90%] sm:w-80 md:w-96 bg-white/90 dark:bg-gray-900/90 shadow-2xl p-6 rounded-l-2xl
          transform transition-all duration-500 ease-in-out z-50
          ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        style={{
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Updates
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Scrollable Updates Section */}
        <div className="space-y-4 mb-6 max-h-48 overflow-y-auto custom-scrollbar">
          {updates.map((update) => (
            <div key={update.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm">
              <p className="text-sm text-gray-800 dark:text-gray-300">{update.text}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400">{update.time}</span>
            </div>
          ))}
        </div>

        <hr className="border-gray-300 dark:border-gray-600 my-4" />

        {/* Badges Section */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2" />
          Badges
        </h2>
        <div className="grid gap-4">
          {badges.map((badge) => (
            <div key={badge.name} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-start space-x-3 shadow-md">
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{badge.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Custom Scrollbar Styling */}
      <style jsx ="true">{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #888, #555);
          border-radius: 10px;
          transition: background 0.3s;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #666, #444);
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </>
  );
};
