"use client";

import React, { useState } from "react";

const CommentSection = () => {
  // State to store the list of comments
  const [comments, setComments] = useState<
    { name: string; email: string; comment: string; date: string; time: string }[]
  >([]);

  // State to store form input values
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (name.trim() === "" || email.trim() === "" || comment.trim() === "") {
      alert("Please fill out all fields!");
      return;
    }

    // Get current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // e.g., "12/30/2024"
    const formattedTime = currentDate.toLocaleTimeString(); // e.g., "3:45 PM"

    // Add the new comment to the list
    setComments([
      ...comments,
      { name, email, comment, date: formattedDate, time: formattedTime },
    ]);

    // Clear the form fields
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments</h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        {/* Name Field */}
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Comment Field */}
        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>

      {/* Comment List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-700">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((c, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:items-start"
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                {/* Placeholder Avatar */}
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{c.name}</h4>
                <p className="text-sm text-gray-500">{c.email}</p>
                <p className="text-gray-700 mt-2">{c.comment}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Posted on {c.date} at {c.time}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
