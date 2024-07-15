import React, { useState } from 'react';
import Post from './components/Post';
import './index.css';

const App = () => {
    const [postId, setPostId] = useState(1);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-6">
            <div className="mb-6 flex items-center space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out"
                    onClick={() => setPostId(prev => prev > 1 ? prev - 1 : 1)}
                >
                    Previous
                </button>
                <span className="text-2xl font-bold text-white">{postId}</span>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out"
                    onClick={() => setPostId(prev => prev + 1)}
                >
                    Next
                </button>
            </div>
            <Post postId={postId} />
        </div>
    );
};

export default App;
