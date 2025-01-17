import React from 'react';

const Filter = ({ categories, onFilterChange, onSortChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 w-full">
      <select
        className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-emerald-400 w-full md:w-1/3"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-emerald-400 w-full md:w-1/3"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
