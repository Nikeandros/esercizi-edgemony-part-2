"use client";

import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleSearch}
      placeholder="Search Pokémon"
      className="search-bar"
    />
  );
};

export default SearchBar;
