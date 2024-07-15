import React, { useState, useEffect } from 'react';

const Post = ({ postId }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };

        fetchPost();
    }, [postId]);

    if (loading) return <div className="text-center mt-6 text-gray-500">Loading...</div>;
    if (error) return <div className="text-center mt-6 text-red-500">Error: {error}</div>;

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-4">{post.body}</p>
        </div>
    );
};

export default Post;
