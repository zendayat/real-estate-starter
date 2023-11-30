import React, {useState, useEffect, createContext} from 'react';

import {housesData} from '../data'

export const HouseContext = createContext()

const HouseContextProvider = ({children}) => {
  

  return 
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice
    }}>
      {children}
    </HouseContext.Provider>;
};

export default HouseContextProvider;
