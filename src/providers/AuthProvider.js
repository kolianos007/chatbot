import React, { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const ga = getAuth();

  useEffect(() => {
    // const unListen = onAuthStateChanged((ga, authUser) => {
    // eslint-disable-next-line no-shadow
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser) {
        setUser({
          _id: authUser.uid,
          name: authUser.displayName || "",
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unListen();
    };
  }, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
    }),
    [user]
  );
  console.log(values);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
