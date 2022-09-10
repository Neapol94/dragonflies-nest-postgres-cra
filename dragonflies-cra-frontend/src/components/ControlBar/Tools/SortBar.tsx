import * as React from 'react';
import './SortBar.scss';

const SortBar = () => {
  return (
    <div className="sort-bar">
      <span className="text">Sortuj:</span> 
      <select id="sort-bar-select">
        <option value="nazwaPL-AZ">Po nazwie(PL) A-Z</option>
        <option value="nazwaPL-ZA">Po nazwie(PL) Z-A</option>
        <option value="rodzajPL-AZ">Po rodzaju(PL) A-Z</option>
        <option value="rodzajPL-ZA">Po rodzaju(PL) Z-A</option>
      </select>
    </div>
  )
}

export default SortBar;
