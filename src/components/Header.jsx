import React from "react";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-6 shadow-md mb-6 rounded-b-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blog Dashboard</h1>
        <p className="text-blue-100 text-sm">Manage & Filter Blog Posts</p>
      </div>
    </header>
  );
};