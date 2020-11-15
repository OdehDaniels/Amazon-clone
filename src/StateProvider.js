import React, { createContext, useContext, useReducer } from "react";

// React Context API

// prepare dataLayer
export const StateContext = createContext();

// Wrap app & provide Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);