//libraries
import React, { useEffect } from 'react';
//components/interfaces
import TableListView from '../../components/ListViewTypes/TableListView';
import { TypeViewEnum } from '../../interfaces/TypeViewEnum';
import { useDragonfliesContext } from '../../context/DragonfliesProvider'
//styles
import './Dragonflies.scss';
import ControlBar from '../../components/ControlBar/ControlBar';
import TileListView from '../../components/ListViewTypes/TileListView';
import ItemListView from '../../components/ListViewTypes/ItemListView';

const Dragonflies = () => {

  const contextToUse = useDragonfliesContext();
  const {loading, error, updateTypeView, updateFilterQueries} = contextToUse;

  useEffect(() => {
    // console.log("u mamy: ", updateFilterQueries.filterType)
  }, [updateTypeView.listType, updateFilterQueries.filterType])

  return (
    
      <div className='main'>
        <h1>Dragonflies page</h1>
        <ControlBar />
        <div className="wrapper">
          {loading && <div>A moment please...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          {updateTypeView.listType === TypeViewEnum.table && (
            <TableListView />
          )}
          {updateTypeView.listType === TypeViewEnum.tile && (
            <TileListView />
          )}
          {updateTypeView.listType === TypeViewEnum.list && (
            <ItemListView />
          )}
        </div>
      </div>
  );
}

export default Dragonflies;