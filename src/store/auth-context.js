import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isPageVisited: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  onVisitPage: () => {},
});

export const AuthContext_Provider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visitPage, setVisitPage] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const visitPageHandler = () => {
    setVisitPage(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setVisitPage(false);
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onVisitPage: visitPageHandler,
        isPageVisited: visitPage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
