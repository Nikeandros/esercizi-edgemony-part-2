"use client";

import React from 'react';

interface FilterProps {
  types: string[];
  onFilter: (type: string) => void;
}

const Filter: React.FC<FilterProps> = ({ types, onFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onFilter(type)}
          className="filter-button"
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Filter;
