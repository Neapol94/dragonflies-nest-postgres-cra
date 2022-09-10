import React, { FC } from 'react';
import { useDragonfliesContext } from '../../context/DragonfliesProvider';
import './TileListView.scss';

type SingleTileType = {
  nazwaPL: string,
  nazwaLAT: string,
  rodzajPL: string
}

const SingleTile: React.FC<SingleTileType> = ({nazwaPL, nazwaLAT, rodzajPL}): JSX.Element => {
  return (
    <div className="single-tile">
      <div className="single-tile-header">
        <span>{nazwaPL}</span>
      </div>
      <p><i>{nazwaLAT}</i></p>
      <p>Rodzaj: {rodzajPL}</p>
    </div>
  )
}

const TileListView = (): JSX.Element => {

  const {list} = useDragonfliesContext();

  return (
    <div className="tile-view-container">
          {list.map(item => <SingleTile nazwaPL={item.nazwaPL} nazwaLAT={item.nazwaLAT} rodzajPL={item.rodzajPL} />)}
    </div>
  )
}

export default TileListView;