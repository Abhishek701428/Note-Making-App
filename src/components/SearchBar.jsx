import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
