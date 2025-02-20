import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Explore } from "./pages/Explore";
import { DiscussionThread } from "./pages/DiscussionThread";
import { Discussions } from "./pages/Discussions";
import { Profile } from "./pages/Profile";
import { Events } from "./pages/Events";
import { AiChat } from "./pages/AiChat";
import { Sidebar } from "./components/Sidebar";
import { Leaderboard } from "./pages/Leaderboard";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Welcome } from "./pages/Welcome";
import './index.css'; // Ya jo bhi CSS file ho

function Layout() {
  const location = useLocation();

  // Exclude navbar/sidebar from these pages
  const authPages = ["/", "/login", "/signup"];
  const showNavbar = !authPages.includes(location.pathname);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {showNavbar && <Navbar />}

      {/* Wrap Sidebar and Main in a flex container */}
      <div className="flex w-full">
        {showNavbar && <Sidebar className="w-64" />}

        {/* Main Content Area - Centered & Wider */}
        <main className="flex-1 flex justify-center items-center p-6">
          <div className="w-full max-w-5xl"> {/* Increased max width */}
            <Routes>
              {/* Auth Routes (No Navbar/Sidebar) */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Main Routes */}
              <Route path="/explore" element={<Explore />} />
              <Route path="/discussions" element={<Discussions />} />
              <Route path="/events" element={<Events />} />
              <Route path="/ai-chat" element={<AiChat />} />
              <Route path="/thread/:id" element={<DiscussionThread />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
