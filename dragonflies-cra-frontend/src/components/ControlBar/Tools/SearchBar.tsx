import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input className='search-input' type="text" defaultValue="Search..." />
      <button className='search-button' type="button"><BsSearch /></button>
    </div>
    
  )
}

export default SearchBar;
