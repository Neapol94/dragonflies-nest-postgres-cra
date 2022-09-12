import * as React from 'react';
import FilterBar from './Tools/FilterBar';

import ListViewControlPanel from './Tools/ListViewControlPanel'
import SearchBar from './Tools/SearchBar';
import SortBar from './Tools/SortBar';

import './ControlBar.scss';
import { useDragonfliesContext } from '../../context/DragonfliesProvider';

const ControlBar = () => {
  
  const {updateFilterQueries} = useDragonfliesContext();
  
  return (
    <>
      <div id="control-bar">
        <SearchBar />
        <SortBar />
        <FilterBar />
        <ListViewControlPanel />
      </div>
      <div id="applied-filters">
        {[updateFilterQueries.filterType].map(filter => <span>{filter.column}: <i>{filter.value}</i></span>)}
      </div>
    </>
  )
}

export default ControlBar
