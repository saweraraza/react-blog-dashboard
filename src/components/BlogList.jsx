import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { BlogCard } from "./BlogCard";
import { deleteBlog, toggleFeatured } from "../redux/blogSlice";

export const BlogList = ({ blogs }) => {
  const dispatch = useDispatch();

  // Requirement: useCallback for delete and toggle functions
  const handleDelete = useCallback((id) => {
    dispatch(deleteBlog(id));
  }, [dispatch]);

  const handleToggleFeatured = useCallback((id) => {
    dispatch(toggleFeatured(id));
  }, [dispatch]);

  if (blogs.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg border">
        <p className="text-gray-500">No blogs found matching criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onDelete={handleDelete}
          onToggleFeatured={handleToggleFeatured}
        />
      ))}
    </div>
  );
};