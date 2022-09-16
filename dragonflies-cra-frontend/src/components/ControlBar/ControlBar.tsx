import React, { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
//styles
import './ControlBar.scss';
//interfaces/contexts
import { FilterType } from '../../interfaces/Dragonfly';
import { useDragonfliesContext } from '../../context/DragonfliesProvider';
//bars
import SearchBar from './Tools/SearchBar';
import SortBar from './Tools/SortBar';
import FilterBar from './Tools/FilterBar';
import ListViewControlPanel from './Tools/ListViewControlPanel';

const ControlBar = () => {
  
  const {updateFilterQueries} = useDragonfliesContext();

  const handleClick = (keyName: string) => {
    updateFilterQueries.setFilterType((prevFilters: FilterType[]) => {
      return [...prevFilters.filter((filterAssigned: FilterType) => (filterAssigned.column+"_"+filterAssigned.value) !== keyName)]
    })
  }

  // useEffect(() => {
  //   console.log(updateFilterQueries.filterType)
  // }, [updateFilterQueries.filterType])
  
  return (
    <>
      <div id="control-bar">
        <SearchBar />
        <SortBar />
        <ListViewControlPanel />
      </div>
      <div id="applied-filters">
        <FilterBar />
        {updateFilterQueries.filterType?.length > 0 && updateFilterQueries.filterType.map(filter => 
          <span key={`${filter.column}_${filter.value}_span`} className='active-filter-option'>
            {filter.column}: <i>{filter.value}</i>
            <button 
              key={`${filter.column}_${filter.value}_btn`}
              className='active-filter-button' 
              onClick={() => handleClick(`${filter.column}_${filter.value}`)} >
                <GrClose />
            </button>
          </span>
        )}
      </div>
    </>
  )
}

export default ControlBar
