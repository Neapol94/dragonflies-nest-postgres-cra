import * as React from 'react';
import './ItemListView.scss';
import { useDragonfliesContext } from '../../context/DragonfliesProvider';

const ItemListView = () => {
  const {list} = useDragonfliesContext();

  return (
    <div className="item-list-container">
      {list.map(el => 
      <div className="item-list-element">
        <img src="/images/no-image.jpg" alt="placeholder" />
        <span>{el.nazwaPL}</span>
        <span><i>{el.nazwaLAT}</i></span>
        <span>{el.rodzinaPL}</span>
      </div>)}
    </div>
  );
}

export default ItemListView;
