import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import { Transaction } from '../components/Transaction';



// Initial state
const initialState = {
  transactions: []
}

// create context 

export const GlobalContext  = createContext(initialState);

//Provider component 
export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions 
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return(
  <GlobalContext.Provider value={ {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>

    {children}
  </GlobalContext.Provider>
  );
}