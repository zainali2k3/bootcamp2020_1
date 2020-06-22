import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: "Salary",
      amount: 1500,
      date: new Date("01/01/2020"),
    },
    { id: 2, text: "House rent", amount: -350, date: new Date("01/05/2020") },
    {
      id: 3,
      text: "Utility bills",
      amount: -175.54,
      date: new Date("01/05/2020"),
    },
  ],
};

// create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  function deleteTransaction(id) {
    debugger;
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    debugger;
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
