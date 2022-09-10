import React from 'react';
import './FilterBar.scss';

const FilterBar = () => {
  return (
    <div className="sort-bar">
      <span className="text">Filtruj:</span> 
      <select id="sort-bar-select">
        <option value="zygoptera">Równoskrzydłe</option>
        <option value="anisoptera">Różnoskrzydłe</option>
        <option value="size-over-50">Długość powyżej 50mm</option>
        <option value="wings-over-50">Rozp. skrzydeł powyżej 50mm</option>
      </select>
    </div>
  )
}

export default FilterBar;
