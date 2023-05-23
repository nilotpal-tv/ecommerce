import React from 'react';
import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <>
      <input
        placeholder="Search items..."
        className="w-full focus:outline-none"
      />
      <Search />
    </>
  );
};

export default SearchInput;
