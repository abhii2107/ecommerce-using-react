
import { createContext, useContext } from "react";

//create context
 
export const AppContext = createContext(); 

//context provider

export const AppProvider = ({children}) => {
    return <AppContext.Provider value={{myName: "Abhi"}}>
        {children}
    </AppContext.Provider>
} 

//custom hooks
export const useProductContext = () => {
    return useContext(AppContext);
};