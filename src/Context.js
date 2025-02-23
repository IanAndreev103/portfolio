import React, { useContext, useReducer } from "react";
import reducer from "./Reducer"

const AppContext = React.createContext();

const initialState = {
  isdarkMode: JSON.parse(localStorage.getItem("TOGGLE_DARKTHEME")) || false,
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleTheme= () =>{
    return dispatch({type: "TOGGLE_THEME"})
}

  return <AppContext.Provider value={{...state, toggleTheme}}>{children}</AppContext.Provider>;
};

//custom hook

const useGlobalContext = () =>{
  return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}
