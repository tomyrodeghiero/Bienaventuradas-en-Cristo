import React, { createContext, useState } from "react";

export const UserContext = createContext({} as any);

export const UserContextProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
