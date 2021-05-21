import React, { useReducer, createContext } from 'react'

export default (reducer, actions, initialState) => {
    const Context = createContext();

    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer, initialState);
       
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        return (
            <Context.Provider value={{state,...boundActions}}>
                {children}
            </Context.Provider>
        )
    };
    return { Context, Provider };
}

/*
This is the functio to automate the process of creating the context
if we might need in the very complex applications
this is usually done because in the future we might want to change
 the features in our app or we might add extra featires to them so
  to make this process easier we automate the process of making context.
*/