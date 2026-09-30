// src/App.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./redux/blogSlice";
import { useFilteredBlogs } from "./hooks/useFilteredBlogs";

import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { BlogStats } from "./components/BlogStats";
import { BlogList } from "./components/BlogList";
import { AddBlogForm } from "./components/AddBlogForm";

export default function App() {
  const dispatch = useDispatch();
  
  // Extract values safely with fallback defaults
  const { blogs = [], searchText = "", selectedCategory = "All", loading, error } = useSelector(
    (state) => state.blog || {}
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Hook MUST be called here directly inside the component body
  const filteredBlogs = useFilteredBlogs(blogs, searchText, selectedCategory);

  const featuredCount = blogs.filter((b) => b.featured).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <SearchBar />
        
        <BlogStats
          totalBlogs={blogs.length}
          filteredCount={filteredBlogs.length}
          featuredCount={featuredCount}
        />

        <AddBlogForm />

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading initial blogs...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <p className="font-bold">Error Loading Blogs</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && <BlogList blogs={filteredBlogs} />}
      </main>
    </div>
  );
}