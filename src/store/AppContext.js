import { createContext, useState } from "react";

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <appContext.Provider value={{ showDrawer, setShowDrawer }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider