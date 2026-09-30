import React from "react";

export const BlogStats = ({ totalBlogs, filteredCount, featuredCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
        <p className="text-gray-500 text-sm">Total Blogs</p>
        <p className="text-2xl font-bold text-blue-600">{totalBlogs}</p>
      </div>
      <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
        <p className="text-gray-500 text-sm">Showing (Filtered)</p>
        <p className="text-2xl font-bold text-green-600">{filteredCount}</p>
      </div>
      <div className="bg-white p-4 rounded-lg border shadow-sm text-center">
        <p className="text-gray-500 text-sm">Featured Blogs</p>
        <p className="text-2xl font-bold text-amber-500">{featuredCount}</p>
      </div>
    </div>
  );
};