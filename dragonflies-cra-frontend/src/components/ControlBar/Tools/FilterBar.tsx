import React, { useEffect, useState } from 'react';
import { useDragonfliesContext } from '../../../context/DragonfliesProvider';
import './FilterBar.scss';

const FilterBar = () => {

  const [filterType, setFilterType] = useState({column: "rodzajLAT", value: "Lestes"})
  
  const contextToUse = useDragonfliesContext();
  const {updateFilterQueries} = contextToUse;

  const changeFilterQueries = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const chosenFilter = event.target.value.split("_")
    setFilterType({column: chosenFilter[0], value: chosenFilter[1]})
    updateFilterQueries.setFilterType({column: chosenFilter[0], value: chosenFilter[1]});
  }

  useEffect(() => {

  }, [filterType])

  return (
    <div className="sort-bar">
      <select id="sort-bar-select" value={filterType.column + "_" +filterType.value} onChange={changeFilterQueries}>
        <optgroup label="rodzajLAT">
          <option value="rodzajLAT_Lestes">Pałątka</option>
          <option value="rodzajLAT_Calopteryx">Świtezianka</option>
        </optgroup>
      </select>
    </div>
  )
}

export default FilterBar;
