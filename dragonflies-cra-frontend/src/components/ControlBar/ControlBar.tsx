import * as React from 'react';
import FilterBar from './Tools/FilterBar';

import ListViewControlPanel from './Tools/ListViewControlPanel'
import SearchBar from './Tools/SearchBar';
import SortBar from './Tools/SortBar';

import './ControlBar.scss';

const ControlBar = () => {
  
  
  return (
    <>
      <div id="control-bar">
        <SearchBar />
        <SortBar />
        <FilterBar />
        <ListViewControlPanel />
      </div>
    </>
  )
}

export default ControlBar
