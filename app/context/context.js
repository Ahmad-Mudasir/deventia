"use client"
import { createContext,useState } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
    const [jobTitle, setJobTitle] = useState('');
  
    return (
      <AppContext.Provider value={{ jobTitle, setJobTitle }}>
        {children}
      </AppContext.Provider>
    );
}

export default AppContext;
