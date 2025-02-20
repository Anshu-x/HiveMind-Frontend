import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-gray-900 to-black overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(63,94,251,0.15)_0%,rgba(252,70,107,0)_60%)] pointer-events-none"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 drop-shadow-lg"
      >
        Welcome to HiveMind
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="mt-3 text-lg md:text-xl text-gray-300 opacity-90 text-center"
      >
        An AI-powered discussion platform.
      </motion.p>

      {/* Button with Glow & Animation */}
      <motion.button
        whileHover={{
          scale: 1.05,
          background: "linear-gradient(to right, #6366F1, #9333EA)",
          boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        onClick={() => navigate("/login")} // Fixed navigation issue
        className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition-all duration-300 animate-pulse-glow"
      >
        Get Started →
      </motion.button>

      {/* Global Animations */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes buttonGlow {
            0% { box-shadow: 0px 0px 10px rgba(99, 102, 241, 0.5); }
            50% { box-shadow: 0px 0px 20px rgba(147, 51, 234, 0.8); }
            100% { box-shadow: 0px 0px 10px rgba(99, 102, 241, 0.5); }
          }

          .animate-pulse-glow {
            animation: buttonGlow 3s infinite alternate;
          }
        `}
      </style>
    </div>
  );
}
