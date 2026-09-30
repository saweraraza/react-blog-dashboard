import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setSelectedCategory } from "../redux/blogSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchText, selectedCategory } = useSelector((state) => state.blog);
  
  // Requirement: useRef to focus on search input when page loads
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const categories = ["All", "React", "Redux", "Node"];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="w-full md:w-1/2">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search by title or author..."
          value={searchText}
          onChange={(e) => dispatch(setSearchText(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto">
        <span className="text-gray-600 text-sm font-medium">Category:</span>
        <select
          value={selectedCategory}
          onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};