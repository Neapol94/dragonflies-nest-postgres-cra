import React, { useContext } from 'react';
import { TypeViewEnum } from '../../../interfaces/TypeViewEnum';
import { BsFillGridFill, BsList, BsTable } from 'react-icons/bs';
import './ListViewControlPanel.scss'
import { useEffect, useState } from 'react';
import { useDragonfliesContext } from '../../../context/DragonfliesProvider';

const ListViewControlPanel = (): JSX.Element => {

  const [type, setType] = useState(TypeViewEnum.table)
  
  const contextToUse = useDragonfliesContext();
  const {updateTypeView} = contextToUse;

  const changeType = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setType(parseInt(event.currentTarget.name))
    updateTypeView.setListType(parseInt(event.currentTarget.name));
  }

  useEffect(() => {
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById(TypeViewEnum[type])?.classList.add("active");
  }, [type])
  
  return (
    <div className="view-control-panel">
      <button id="table" onClick={changeType} className="active view-option table-view-option" name={`${TypeViewEnum.table}`}><BsTable /></button>
      <button id="tile" onClick={changeType} className="view-option tile-view-option" name={`${TypeViewEnum.tile}`}><BsFillGridFill /></button>
      <button id="list" onClick={changeType} className="view-option list-view-option" name={`${TypeViewEnum.list}`}><BsList /></button>
    </div>
  )
}

export default ListViewControlPanel;
