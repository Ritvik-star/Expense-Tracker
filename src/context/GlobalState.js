import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";


//Intial state
const initialState = {
     transactions: [
         {id: 1, text: 'flower', amount: -20},
         {id: 2, text: 'Salary', amount: 300},
         {id: 3, text: 'Book', amount: -10},
         {id: 4, text: 'Camera', amount: 150}
     ]
}

//creating global context

export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransaction(id){     //to delete item form list
    dispatch({
        type : 'DELETE',
        payload: id
    });
}    

function addTransaction(transaction){
    dispatch({
        type : 'ADD',
        payload: transaction
    });
}


    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )

}