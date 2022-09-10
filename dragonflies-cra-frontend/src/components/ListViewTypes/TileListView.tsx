import React from 'react';
import { useDragonfliesContext } from '../../context/DragonfliesProvider';
import { CgEnter } from 'react-icons/cg';
import './TileListView.scss';

type SingleTileType = {
  id: number,
  nazwaPL: string,
  nazwaLAT: string,
  rodzajPL: string
}

const SingleTile: React.FC<SingleTileType> = ({id, nazwaPL, nazwaLAT, rodzajPL}): JSX.Element => {
  return (
    <div className="single-tile">
      <div className="single-tile-header">
        <span>{nazwaPL}</span>
      </div>
      <p><i>{nazwaLAT}</i></p>
      <p>Rodzaj: {rodzajPL}</p>
      <div className='view-dragonfly-button'><a href={`/dragonflies/${id}`}>Zobacz <CgEnter /></a></div>
    </div>
  )
}

const TileListView = (): JSX.Element => {

  const {list} = useDragonfliesContext();

  return (
    <div className="tile-view-container">
          {list.map(item => <SingleTile id={item.id} nazwaPL={item.nazwaPL} nazwaLAT={item.nazwaLAT} rodzajPL={item.rodzajPL} />)}
    </div>
  )
}

export default TileListView;