// src/pages/BookDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://freetestapi.com/api/v1/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => setError("Error fetching book details"));
  }, [id]);

  const handleDelete = () => {
    fetch(`https://freetestapi.com/api/v1/books/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        navigate('/');
      } else {
        setError("Error deleting book");
      }
    })
    .catch(error => setError("Error deleting book"));
  };

  if (error) return <div className="text-center mt-20 text-xl text-red-500">{error}</div>;
  if (!book) return <div className="text-center mt-20 text-xl">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-indigo-700">{book.title}</h1>
        <p className="text-xl text-gray-700 mb-4">{book.author}</p>
        <p className="text-gray-600 mb-4">{book.description}</p>
        <div className="text-right">
          <button 
            onClick={() => window.history.back()} 
            className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300"
          >
            Go Back
          </button>
          <button 
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-full ml-2 hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
