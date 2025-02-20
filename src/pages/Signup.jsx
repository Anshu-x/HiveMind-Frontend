import { useState } from "react";
import { Mail, LockKeyhole, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Signing up with:", { username, email, password });
      setLoading(false);
      navigate("/explore");
    }, 2000);
  };

  const handleLoginNavigation = () => {
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(63,94,251,0.15)_0%,rgba(252,70,107,0)_60%)] pointer-events-none"></div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-96 border border-gray-600/30"
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          Create an Account
        </h2>

        {/* Social Signup */}
        <div className="flex justify-center gap-4 mb-4">
          {["17949", "3tC9EQumUAuq", "13930"].map((id, index) => (
            <motion.img
              key={index}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 cursor-pointer opacity-90 hover:opacity-100"
              src={`https://img.icons8.com/?size=100&id=${id}&format=png&color=FFFFFF`}
              alt="Social Signup"
            />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-400/30"></div>
          <span className="px-2 text-gray-300 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-400/30"></div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup}>
          <div className="mb-3 relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 relative">
            <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <motion.button
            whileHover={{
              scale: 1.02,
              background: "linear-gradient(to right, #6366F1, #9333EA)",
              boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            type="submit"
            className={`w-full py-3 rounded-lg text-white transition duration-300 font-semibold animate-pulse-glow ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/50"
            }`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </motion.button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-gray-400 mt-3">
          Already have an account?{" "}
          <span
            onClick={handleLoginNavigation}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}