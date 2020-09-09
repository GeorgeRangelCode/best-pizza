import React, { useState } from "react";

const Context = React.createContext({});

export function ContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [storeList, setStoreList] = useState([]);
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("isAuth");
  });

  return (
    <Context.Provider
      value={{
        loading,
        error,
        storeList,
        isAuth,
        setLoading,
        setError,
        setStoreList,
        setIsAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
