import React, { useEffect, useState } from 'react';
import { useDragonfliesContext } from '../../../context/DragonfliesProvider';
import { FilterType } from '../../../interfaces/Dragonfly';
import './FilterBar.scss';

const FilterBar = () => {

  const [filterType, setFilterType] = useState<FilterType[]>([])
  
  const contextToUse = useDragonfliesContext();
  const {updateFilterQueries} = contextToUse;

  const changeFilterQueries = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const chosenFilter = event.target.value.split("_")
    
    setFilterType([...filterType, {column: chosenFilter[0], value: chosenFilter[1]}])
    updateFilterQueries.setFilterType([...filterType, {column: chosenFilter[0], value: chosenFilter[1]}]);
    
  }

  return (
    <div className="filter-bar">
      <select id="filter-bar-select" value={filterType.length > 0 ? filterType[0].column + "_" +filterType[0].value : ("choose_filter")} onChange={changeFilterQueries}>
        <optgroup label="rodzajLAT">
          <option value="rodzajLAT_Lestes">Pałątka</option>
          <option value="rodzajLAT_Calopteryx">Świtezianka</option>
          <option value="rodzajLAT_Sympecma">Straszka</option>
          <option value="rodzajLAT_Coenagrion">Łątka</option>
          <option value="rodzajLAT_Ischnura">Tężnica</option>
          <option value="rodzajLAT_Enallagma">Nimfa</option>
        </optgroup>
      </select>
    </div>
  )
}

export default FilterBar;
