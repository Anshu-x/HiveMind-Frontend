import React from "react";
import { Calendar } from "lucide-react";

export const Events = () => {
  const events = [
    {
      id: 1,
      title: "Community Meetup",
      date: "2024-03-25",
      time: "14:00",
      description:
        "Join us for our monthly community meetup where we discuss the latest tech trends.",
      location: "IMS, SOA University",
    },
    {
      id: 2,
      title: "Tech Workshop",
      date: "2024-04-01",
      time: "10:00",
      description:
        "Learn about the latest developments in web development and cloud computing.",
      location: "KIIT",
    },
    {
      id: 3,
      title: "AI & ML Conference",
      date: "2024-04-15",
      time: "09:30",
      description:
        "An insightful conference covering the future of AI, ML, and their real-world applications.",
      location: "ITER, SOA University",
    },
    {
      id: 4,
      title: "Blockchain Summit",
      date: "2024-05-05",
      time: "11:00",
      description:
        "A deep dive into blockchain technology, smart contracts, and decentralized applications.",
      location: "Virtual",
    },
    {
      id: 5,
      title: "Cybersecurity Awareness Webinar",
      date: "2024-05-20",
      time: "16:00",
      description:
        "A crucial session on how to protect your digital assets and stay secure online.",
      location: "Online",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br bg-gradient-to-b from-gray-900 to-gray-950 px-6 py-10 pt-20 rounded-xl">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Calendar className="w-8 h-8 text-indigo-400 animate-pulse mr-3" />
        <h1 className="text-4xl font-extrabold text-white">Upcoming Events</h1>
      </div>

      {/* Events List */}
      <div className="grid gap-8 w-full max-w-4xl rounded-xl">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-gray-700 shadow-lg rounded-2xl p-6 
            transition-all transform hover:scale-[1.03] hover:border-indigo-500 transition-all hover:scale-105 hover:shadow-indigo-500/50"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md 
                hover:bg-indigo-600 transition-transform transform hover:scale-110
                hover:shadow-[0_0_10px_rgba(139,92,246,0.8)]">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
