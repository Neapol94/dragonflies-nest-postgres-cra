import React, { useEffect, useState } from 'react';
import './DragonflyDetails.scss';
import { getDragonflyById } from '../../services/dragonflies.service';
import { Dragonfly } from '../../interfaces/Dragonfly';
import { useParams } from 'react-router-dom';

const DragonflyDetails = (): JSX.Element => {

  const [value, setValue] = useState<Dragonfly>();

  let { id } = useParams();
  
  useEffect(() => {

    if(typeof id === 'string') {
      getDragonflyById(parseInt(id)).then(res => 
        setValue(res))
    }
  }, [id, value]);

  return (
    <div className="main">
      <div className="dragonfly-details-container">
        <img src="/images/no-image.jpg" alt="placeholder" />
        <div className="dragonfly-main-details">
          <h2>{`${value?.nazwaPL}`} - <i>{`${value?.nazwaLAT}`}</i></h2>
          <p>Rodzaj: {`${value?.rodzajPL}`}({`${value?.rodzajLAT}`})</p>
          <p>Rodzina: {`${value?.rodzinaPL}`}({`${value?.rodzinaLAT}`})</p>
          <p>Podrząd: {`${value?.podrzadPL}`}({`${value?.podrzadLAT}`})</p>
          <p>Rząd: {`${value?.rzadPL}`}({`${value?.rzadLAT}`})</p>
        </div>
      </div>
    </div>
  );
}

export default DragonflyDetails;
