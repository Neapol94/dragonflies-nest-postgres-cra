import React from 'react';
import { useDragonfliesContext } from '../../context/DragonfliesProvider';
import './TableListView.scss';

const TableListView = () => {

  const dragonflies = useDragonfliesContext();
  const {list} = dragonflies;

  return (
        <>
          <table className="rwd-table">
            <tbody>
              <tr className="tableRowHeader">
                <th>Nazwa(lat)</th>
                <th>Rodzaj(lat)</th>
                <th>Rodzina(lat)</th>
                <th>Podrząd(lat)</th>
                <th>Rząd(lat)</th>
              </tr>
              {list &&
                list.map(({ 
                  id, 
                  nazwaPL, 
                  nazwaLAT, 
                  rodzajLAT, 
                  rodzajPL, 
                  rodzinaLAT, 
                  rodzinaPL, 
                  podrzadPL, 
                  podrzadLAT, 
                  rzadLAT, 
                  rzadPL
                }) => (
                  <tr key={id} className="tableRowData">
                    <th>{nazwaPL}(<i>{nazwaLAT}</i>)</th>
                    <th>{rodzajPL}(<i>{rodzajLAT}</i>)</th>
                    <th>{rodzinaPL}(<i>{rodzinaLAT}</i>)</th>
                    <th>{podrzadPL}(<i>{podrzadLAT}</i>)</th>
                    <th>{rzadPL}(<i>{rzadLAT}</i>)</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
          )
}

export default TableListView;