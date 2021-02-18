import React, { createContext, useContext, useReducer } from "react";

export const SearchContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <SearchContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SearchContext.Provider>
);

export const useStateValue = () => useContext(SearchContext);
