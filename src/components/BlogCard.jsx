import React from "react";

// Requirement: React.memo for BlogCard
export const BlogCard = React.memo(({ blog, onDelete, onToggleFeatured }) => {
  return (
    <div className={`p-5 rounded-lg border shadow-sm transition-all duration-200 bg-white flex flex-col justify-between ${blog.featured ? "border-amber-400 border-2" : "border-gray-200"}`}>
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded font-semibold uppercase">
            {blog.category}
          </span>
          {blog.featured && (
            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded font-semibold">
              ⭐ Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-600 mb-1">Author: <span className="font-medium text-gray-700">{blog.author}</span></p>
        <p className="text-sm text-gray-500 mb-4">⏱️ {blog.readingTime} min read</p>
      </div>

      <div className="flex justify-between items-center pt-3 border-t">
        <button
          onClick={() => onToggleFeatured(blog.id)}
          className={`text-xs px-3 py-1.5 rounded transition ${
            blog.featured ? "bg-gray-200 hover:bg-gray-300 text-gray-700" : "bg-amber-500 hover:bg-amber-600 text-white"
          }`}
        >
          {blog.featured ? "Unmark Featured" : "Mark Featured"}
        </button>
        <button
          onClick={() => onDelete(blog.id)}
          className="text-xs px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
});

BlogCard.displayName = "BlogCard";