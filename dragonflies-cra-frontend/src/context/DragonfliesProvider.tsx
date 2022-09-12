import axios from 'axios';
import React, { useContext, useState, createContext, useEffect } from 'react';
import { Dragonfly, FilterType } from '../interfaces/Dragonfly';
import { TypeViewEnum } from '../interfaces/TypeViewEnum';

type DataForContext = {
  list: Dragonfly[],
  error: string | null,
  loading: boolean,
  updateTypeView: {listType: number, setListType: Function},
  updateFilterQueries: {filterType: FilterType, setFilterType: Function}
}

const DragonfliesContext = createContext<DataForContext>({
  list: [],
  error: "",
  loading: false,
  updateTypeView: {listType: TypeViewEnum.table, setListType: () => {}},
  updateFilterQueries: {filterType: {column: "rodzajLAT", value: "Lestes"}, setFilterType: () => {}},
});

type Props = {
  children: JSX.Element
}

const DragonfliesProvider: React.FC<Props> = ({ children }) => {
  
  const [list, setList] = useState<Dragonfly[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listType, setListType] = useState<TypeViewEnum>(TypeViewEnum.table)
  const [filterType, setFilterType] = useState<FilterType>({column: "rodzajLAT", value: "Lestes"})

  const updateTypeView = {listType, setListType};
  const updateFilterQueries = {filterType, setFilterType};

  useEffect(() => {
    // const requestURL = () => {
    //   if(updateFilterQueries.filterType)
    // }
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
  }, [])

  return (
    <DragonfliesContext.Provider value={{list, error, loading, updateTypeView, updateFilterQueries}}>
      {children}
    </DragonfliesContext.Provider>
  );
};

export const useDragonfliesContext = () => useContext(DragonfliesContext);

export default DragonfliesProvider;