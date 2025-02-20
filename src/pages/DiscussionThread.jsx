import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Sparkles } from 'lucide-react';

export const DiscussionThread = () => {
  const { id } = useParams();
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([
    {
      id: '1',
      content: 'This was really insightful! Thanks for sharing.',
      author: {
        name: 'Aarav Sharma',
        avatar: 'https://randomuser.me/api/portraits/men/30.jpg'
      },
      createdAt: '1 hour ago'
    },
    {
      id: '2',
      content: 'Do you have any beginner-friendly resources for this?',
      author: {
        name: 'Ishita Patel',
        avatar: 'https://randomuser.me/api/portraits/women/31.jpg'
      },
      createdAt: '45 minutes ago'
    }
  ]);

  const handleSummary = () => {
    alert('Summarizing thread...');
  };

  const handleReply = () => {
    if (!reply.trim()) return;
    
    setReplies([
      ...replies,
      {
        id: Date.now().toString(),
        content: reply,
        author: {
          name: 'You',
          avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/pm-modi-smiling-064650298-1x1.jpeg?VersionId=9w2sDdTPC74oi3qxdo8II4Sco1dvH1NT' // Temporary avatar for user
        },
        createdAt: 'Just now'
      }
    ]);
    setReply("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative">
      {/* Thread Section */}
      <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/10 overflow-hidden">
        <button
          onClick={handleSummary}
          className="absolute top-4 right-4 flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          <Sparkles className="w-5 h-5 mr-2" /> Summarize
        </button>

        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Future of AI in Indian Startups
        </h1>
        <div className="flex items-center space-x-3 mb-6">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rohan Verma" className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Rohan Verma</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Posted 2 hours ago</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          With AI rapidly evolving, how do you see its role in shaping Indian startups over the next decade? Will AI-driven automation dominate, or will human intervention remain crucial?
        </p>
      </div>

      {/* Replies Section */}
      <div className="mt-10 space-y-6 pb-32">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Replies</h2>
        {replies.map((reply) => (
          <div key={reply.id} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-lg shadow p-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <img src={reply.author.avatar} alt={reply.author.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-lg font-medium text-gray-900 dark:text-white">{reply.author.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{reply.createdAt}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{reply.content}</p>
          </div>
        ))}
      </div>

      {/* Reply Input (Fixed at Bottom) */}
      <div className="fixed bottom-0 left-0 w-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg shadow-md p-4 border-t dark:border-gray-700 flex items-center space-x-4">
        <textarea
          rows={2}
          className="flex-1 p-3 border dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
          placeholder="Write your reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button
          onClick={handleReply}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
