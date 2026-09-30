import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../redux/blogSlice";

export const AddBlogForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "React",
    readingTime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;
    dispatch(addBlog(formData));
    setFormData({ title: "", author: "", category: "React", readingTime: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-sm border mb-6 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
      <div>
        <label className="block text-xs font-semibold mb-1">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Author</label>
        <input
          type="text"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full p-2 border rounded text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full p-2 border rounded text-sm"
        >
          <option value="React">React</option>
          <option value="Redux">Redux</option>
          <option value="Node">Node</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Reading Time (min)</label>
        <input
          type="number"
          value={formData.readingTime}
          onChange={(e) => setFormData({ ...formData, readingTime: e.target.value })}
          className="w-full p-2 border rounded text-sm"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-sm font-semibold">
        Add Blog
      </button>
    </form>
  );
};