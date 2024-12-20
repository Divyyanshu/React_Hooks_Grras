import { createContext } from "react";


export const DataContext = createContext();

export function DataProvider({children}){
    const name = "divyanshu"
    return (
        <DataContext.Provider value={{name}}>
     {children}
        </DataContext.Provider>
    )
}
