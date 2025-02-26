import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, MessagesSquare, Calendar, Bot, LogOut, Bell, Trophy } from 'lucide-react';
import { Sidebar } from './Sidebar';

export const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ useNavigate for redirection

  const navItems = [
    { path: '/explore', label: 'Explore', icon: Home },
    { path: '/discussions', label: 'Discussions', icon: MessagesSquare },
    { path: '/events', label: 'Upcoming Events', icon: Calendar },
    { path: '/ai-chat', label: 'AI Chat', icon: Bot },
    { path: '/leaderboard', label: 'Leaderboard', icon: Trophy }
  ];

  //  Handle Logout and Redirect
  const handleLogout = () => {
    // TODO: Clear user session or token
    navigate('/login'); 
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-20">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">HiveMind</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Profile, Updates & Logout */}
          <div className="flex items-center space-x-4">
            {/* Updates Button */}
            <button
              onClick={() => setIsSidebarVisible(true)}
              className="flex items-center space-x-2 p-2 rounded-lg text-gray-900 hover:bg-indigo-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <Bell className="w-5 h-5" />
            </button>

            {/* Profile Picture */}
            <Link to="/profile">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKU3YdV6D6fztGYERjmk8mGNITTy5gLoFlw&s" 
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-indigo-500 dark:border-indigo-400"
              />
            </Link>

            {/* Logout Button */}
            <button
              className="flex items-center space-x-2 p-2 rounded-lg text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors"
              onClick={handleLogout} 
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isVisible={isSidebarVisible} onClose={() => setIsSidebarVisible(false)} />
    </>
  );
};
