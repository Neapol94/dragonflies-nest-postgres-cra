import axios from 'axios';
import React, { useContext, useState, createContext, useEffect, useReducer } from 'react';
import { Dragonfly } from '../interfaces/Dragonfly';
import { TypeViewEnum } from '../interfaces/TypeViewEnum';

type DataForContext = {
  list: Dragonfly[],
  error: string | null,
  loading: boolean,
  updateTypeView: {listType: number, setListType: Function}
}

const DragonfliesContext = createContext<DataForContext>({
  list: [],
  error: "",
  loading: false,
  updateTypeView: {listType: TypeViewEnum.table, setListType: () => {}}
});

type Props = {
  children: JSX.Element
}

const DragonfliesProvider: React.FC<Props> = ({ children }) => {
  
  const [list, setList] = useState<Dragonfly[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listType, setListType] = useState<TypeViewEnum>(TypeViewEnum.table)

  const updateTypeView = {listType, setListType};

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:8080/dragonflies'
    }).then(response => 
      {
        setList(response.data);
      }
    )
    .catch((err) => {
      setError(err.message);
      setList([]);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [list])

  return (
    <DragonfliesContext.Provider value={{list, error, loading, updateTypeView}}>
      {children}
    </DragonfliesContext.Provider>
  );
};

export const useDragonfliesContext = () => useContext(DragonfliesContext);

export default DragonfliesProvider;