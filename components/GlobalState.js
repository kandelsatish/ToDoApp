import React,{createContext,useState} from 'react'

export const Contx=createContext();

export default function GlobalState({children}) {
    const [change,setChanged]=useState(false);
    return (
        <Contx.Provider value={{
            change,
            setChanged,
        }}>
            {children}
        </Contx.Provider>
    )
}

