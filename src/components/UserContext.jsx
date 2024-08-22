import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInitials, setUserInitials] = useState("");

  return (
    <UserContext.Provider value={{ userInitials, setUserInitials }}>
      {children}
    </UserContext.Provider>
  );
};
